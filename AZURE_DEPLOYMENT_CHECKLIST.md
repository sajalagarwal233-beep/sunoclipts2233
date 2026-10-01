# SupoClip — Azure Deployment Checklist

Written 2026-09-30, after getting this app working end-to-end on a local Windows
machine without Docker. Everything marked **VERIFIED** was actually run; everything
marked **UNVERIFIED** has not been tested — do not treat it as working.

---

## 0. Read this first

**This project is Linux-targeted, so Azure Linux is a better fit than Windows was.**
The local setup needed four code fixes. Two of them were *Windows-only* and will not
recur on Linux — but **two are version/logic bugs that will break Azure OpenAI on any
OS unless you carry the patches across.**

If you deploy a fresh clone, you will reintroduce bugs #1 and #2 below. The Azure OpenAI
path is broken in this codebase as shipped.

---

## 1. Patched files you MUST carry across

Copy the whole project folder, or at minimum these files with their local fixes:

| # | File | What was wrong | Still breaks on Linux? |
|---|------|----------------|------------------------|
| 1 | `backend/src/ai.py` | `OpenAIProvider(api_version=...)` — not a valid argument in pydantic-ai 1.x. Every Azure call raised `unexpected keyword argument 'api_version'`. | **YES — must carry** |
| 2 | `backend/src/ai.py` | The Azure branch returned an `OpenAIProvider` where `Agent(model=...)` needs a `Model`. Fixed by wrapping in `OpenAIModel`. | **YES — must carry** |
| 3 | `backend/src/services/task_service.py` | A task whose clips all failed still reported **"Complete! 100%"** with 0 clips, hiding the real error. Now raises and marks the task `error`. | **YES — must carry** |
| 4 | `backend/src/services/task_service.py` | Failed completion emails logged a full ERROR traceback. Now a one-line warning. | No (cosmetic) |
| 5 | `backend/src/media/ffmpeg.py`, `backend/src/clip_editor.py` | ffmpeg filter path escaping. Windows drive colon needed `E\\:/dir/file` (colon escaped **twice**). | No — Linux paths have no drive letter |
| 6 | `backend/src/media/ffmpeg.py` | Added `FINAL_VIDEO_THREADS` cap (default 2) to `build_final_video_encode_args`; uncapped libx264 threads caused OOM. | **Tune on Azure** (see §5) |
| 7 | `backend/src/editor_document.py` | Replaced Unix-only `fcntl` with `msvcrt` on Windows. | No — Linux has `fcntl` |
| 8 | `backend/src/youtube_utils.py` | Format selector was `bestvideo*+bestaudio`, so a 4K source was downloaded for 1080x1920 output. Now capped (see §10b). | **YES — must carry** |

Original copies of every touched file are in `E:\supoclip-local\backups\`.

---

## 2. Sizing

| | Recommendation |
|---|---|
| RAM | **16 GB.** 8 GB works but is the floor — at 8 GB, with a browser or anything else open, ffmpeg dies with `Cannot allocate memory` (errno -12). |
| vCPU | **4.** Recommend at least 2. Renders scale roughly linearly; ffmpeg is CPU-bound. |
| Disk | 128 GB is fine for the app. Watch the **12 GB** `MAX_VIDEO_UPLOAD_BYTES` limit — a handful of long uploads plus their clips will fill it. Renders go to `/tmp`; confirm `/tmp` is on a disk with room. |

**VERIFIED warning:** on 8 GB with a browser and other apps open, only ~870 MB was free
and the render failed in `sws: initFilter` with `Cannot allocate memory`. Stopping
everything else made the same job pass.

---

## 3. System prerequisites (Linux VM)

```bash
sudo apt update
sudo apt install -y postgresql-17 redis-server ffmpeg \
    python3.12 python3.12-venv curl git fontconfig fonts-dejavu

# Deno is REQUIRED for YouTube sources (see §10a) - yt-dlp needs a JS runtime
curl -fsSL https://deno.land/install.sh | sh
```

- **FFmpeg must be on `PATH`** — the pipeline shells out to it constantly.
- **Libass needs fonts.** The app ships `backend/fonts` and passes it as `fontsdir`;
  `fontconfig` must also be installed or subtitle rendering degrades.
- **Deno must be on `PATH` of the worker process.** Without it, YouTube downloads of
  the app's chosen format stall at 0 bytes. See §10a — this is a **VERIFIED** finding.
- Node.js 22.x + pnpm 10.x for the frontend.

---

## 4. Environment variables

### Must be set (backend, root `.env`)

```env
DATABASE_URL=postgresql+asyncpg://supoclip:<password>@127.0.0.1:5432/supoclip
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

TRANSCRIPTION_PROVIDER=assemblyai
ASSEMBLY_AI_API_KEY=<your key>            # VERIFIED valid format, HTTP 200

LLM=azure-openai:<your deployment>
AZURE_OPENAI_API_KEY=<your key>
AZURE_OPENAI_ENDPOINT=<your endpoint>
AZURE_OPENAI_DEPLOYMENT=<deployment>
```

> **Note on the endpoint.** An Azure *AI Foundry project* URL of the form
> `https://<res>.services.ai.azure.com/api/projects/<proj>` works — the code appends
> `/openai/v1` to build an OpenAI-compatible base URL. This was **VERIFIED working**.

### Leave blank unless you want them

```env
AWS_REGION= / AWS_ACCESS_KEY_ID= / AWS_SECRET_ACCESS_KEY= / SES_FROM_EMAIL=
```
Completion emails only send when all four are present. Blank them and the app skips
email silently rather than erroring.

### Frontend (`frontend/.env`)

```env
DATABASE_URL=postgresql://supoclip:<password>@127.0.0.1:5432/supoclip
BETTER_AUTH_SECRET=<random string>
BETTER_AUTH_URL=http://<your host or IP>:3107
BACKEND_AUTH_SECRET=<random string>
APP_SETTINGS_ENCRYPTION_KEY=<random string>
NEXT_PUBLIC_API_URL=http://<your host>:8000
BACKEND_INTERNAL_URL=http://127.0.0.1:8000
NEXT_PUBLIC_APP_URL=http://<your host>:3107
```
Note the **scheme differs**: the backend uses `postgresql+asyncpg://`, the frontend
uses plain `postgresql://`.

---

## 5. Tune for a bigger VM

| Setting | Local value | On Azure |
|---|---|---|
| `FINAL_VIDEO_THREADS` (env) | `2` | **`4` or more** — raise it to use the vCPUs. Lower it if you see `Cannot allocate memory`. |
| Frontend | `pnpm dev` | **`pnpm build` + `pnpm start`** — production is far lighter and loads in ms instead of minutes. The local build failure was a Windows-only glob on `My Documents`; it should build on Linux. **UNVERIFIED on Linux.** |
| `MAX_VIDEO_DURATION` | `5400` (90 min) | Keep or raise deliberately. |

---

## 6. Database setup — important

**Do NOT run `prisma migrate deploy`.** The Prisma migration `20250729012245_unified_schema`
conflicts with `init.sql` (it declares `users.id UUID` + `first_name NOT NULL`, while
`init.sql` — which is what Docker actually uses — declares `VARCHAR(36)` and nullable).

Correct sequence:

```bash
sudo -u postgres psql -c "CREATE ROLE supoclip LOGIN PASSWORD '<password>' SUPERUSER;"
sudo -u postgres psql -c "CREATE DATABASE supoclip OWNER supoclip;"
psql -U supoclip -d supoclip -v ON_ERROR_STOP=1 -f init.sql    # VERIFIED: creates 12 tables
cd frontend && pnpm install && pnpm exec prisma generate        # generate only
```
The backend's startup `init_db()` is a no-op on an existing schema and ignores a
missing `backend/src/migrations/sql` directory.

Expected result: **13 tables** (12 from `init.sql` + `schema_migrations`).

---

## 7. Launch order

1. PostgreSQL → 2. Redis → 3. backend (`uvicorn src.main:app --host 0.0.0.0 --port 8000`,
cwd `backend/`) → 4. worker (`arq src.workers.tasks.WorkerSettings`, cwd `backend/`) →
5. frontend (`pnpm start -p 3107`).

On a server, use **systemd units** for these five so they survive reboots and crashes.
The `pg_ctl`/process-management pain on Windows does not apply — use proper units.

> **Backend startup is slow** (it imports torch, mediapipe, opencv). Allow ~2-3 minutes
> before declaring it hung. The local machine needed >300 s on first import.

---

## 8. Post-deploy verification

```bash
curl -s localhost:8000/health          # {"status":"healthy"}
curl -s localhost:8000/health/db       # 200
curl -s localhost:8000/health/redis    # 200
curl -s -o /dev/null -w '%{http_code}' localhost:3107/    # 200
```
Then run one **short** video end to end before trusting it.

---

## 9. Known limitations — do NOT promise yourself these work

- **Long-form video is UNVERIFIED.** Everything validated so far was a 37-second clip
  from a 2.45 MB file. See the notes in §10.
- **A failed render used to report success.** Fixed (patch #3) — make sure that patch
  is deployed, otherwise failures will look like successes.
- **Face detection is degraded.** MediaPipe (`module 'mediapipe' has no attribute
  'solutions'`) and the OpenCV DNN detector both fail to load and the code silently
  falls back to a weaker detector. OS-independent. Output is still produced, but
  face-centred framing may be worse than intended.
- **Completion emails** fail with `UnrecognizedClientException` if SES credentials are
  present but invalid. Blank all four AWS vars to skip cleanly.
- **Local Whisper transcription** is not set up here. `TRANSCRIPTION_PROVIDER=whisper`
  would run locally with no key, but needs the model downloaded and is slow on CPU.

---

## 10a. YouTube downloads need a JavaScript runtime — VERIFIED

yt-dlp now requires a JS runtime to solve YouTube's signature challenge. Without one it
prints:

```
WARNING: [youtube] No supported JavaScript runtime could be found.
Only deno is enabled by default ... some formats may be missing.
```

**What I observed:** the app selected format `f401` (4K AV1 video-only) and the download
sat at a **0-byte `.part` file for over 7 minutes**. Format listing worked fine, and
downloading an explicit lower format (`-f 140`, audio-only) ran at ~2 MB/s — so the
network was never the problem. The high-quality format needs the JS runtime.

**Fix:** install Deno and make sure it is on the `PATH` **of the worker process**
(restart the worker after installing). `YOUTUBE_DOWNLOAD_PROVIDER=yt_dlp` stays as-is.

Do not skip this on Azure — it is the difference between YouTube tasks working and
hanging forever at 10% "Downloading video...".

---

## 10b. YouTube resolution cap — VERIFIED

The downloader asked for `bestvideo*+bestaudio`, i.e. the **highest resolution available**.
For the 35-minute test video that meant a **4K AV1** stream — and every clip is rendered
to 1080x1920, so the extra pixels are pure waste.

Symptom: the download sat at a 0-byte `.part` file indefinitely. Listing formats worked,
and an explicit lower format (`-f 140`) downloaded at ~2 MB/s, so it was never the network.

Fix applied in `youtube_utils.py`: the format is now height-capped, defaulting to 1080p,
overridable with `YOUTUBE_MAX_HEIGHT`:

```python
max_height = os.getenv("YOUTUBE_MAX_HEIGHT", "1080")
"format": f"bestvideo*[height<={max_height}]+bestaudio/best[height<={max_height}]/best"
```

Set `YOUTUBE_MAX_HEIGHT=720` on a small VM to cut download time further.

---

## 10. Long-form video: specific untested risks

1. **No transcript chunking.** The entire transcript is sent to the LLM in a single
   prompt (`ai.py` logs the full character count). A multi-hour transcript may exceed
   output token limits or return an unusably large segment list. **This is the most
   likely first failure.**
2. **AssemblyAI's own duration/file-size caps** are external to this code. A 35-minute
   video should be fine; multiple hours may not be.
3. **Per-clip ffmpeg timeout** is 900 s in the reframe path, 1800 s elsewhere. A 60 s
   clip is comfortable; a slow VM has less headroom.
4. **Disk growth from uploads.** Temp render directories *are* cleaned up (VERIFIED:
   only 2 MB left behind). Uploaded sources and produced clips are kept.

---

## 11. Verified-working reference (local baseline)

| Item | Value |
|---|---|
| Input | 2.45 MB uploaded video |
| Output | `clip_1_0000-0036_*.mp4`, 37 s, 9.5 MB, 1080x1920 with burned-in subtitles |
| Pipeline stages | download → transcription (AssemblyAI) → LLM analysis (Azure) → ffmpeg render |
| Time | ~5 minutes total on 8 GB / slow disk with a 2-thread cap |
| Database | 13 tables; row present in `generated_clips` |
