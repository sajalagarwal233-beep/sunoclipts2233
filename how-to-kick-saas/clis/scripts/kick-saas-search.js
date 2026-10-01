#!/usr/bin/env node
/**
 * kick-saas-search — zero-dependency full-text search over the bundled book
 * "How to Kick SaaS" (JH Media Group).
 *
 * Part of the how-to-kick-saas plugin. The book lives at <plugin-root>/book/.
 *
 * Usage:
 *   kick-saas-search "pricing model"
 *   kick-saas-search "churn" --context 3
 *   kick-saas-search "lead scoring" --files-only
 *   kick-saas-search "keyword research" --section acquisition-gaining-saas-users
 *   kick-saas-search --list
 *   kick-saas-search "CAC" --json
 *
 * Exit codes: 0 = ran fine (even with zero matches), 1 = usage/book error.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const VERSION = '1.0.0';
const BOOK_DIR = path.resolve(__dirname, '..', '..', 'book');
const MAX_HITS_PER_FILE = 25;

function collectChapters(dir, acc) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return acc;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'node_modules') continue;
      collectChapters(full, acc);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md') && entry.name !== 'SUMMARY.md') {
      acc.push(full);
    }
  }
  return acc;
}

function toBookPath(abs) {
  return path.relative(BOOK_DIR, abs).split(path.sep).join('/');
}

function usage() {
  process.stdout.write(
    [
      'kick-saas-search ' + VERSION + ' — search the bundled "How to Kick SaaS" book',
      '',
      'Usage:',
      '  kick-saas-search <query> [options]',
      '  kick-saas-search --list',
      '',
      'Options:',
      '  --context N        show N lines of context around each hit (default 0)',
      '  --files-only       list only the chapter files that contain matches',
      '  --section NAME     restrict to chapters whose path contains NAME',
      '  --case-sensitive   match case exactly (default: case-insensitive)',
      '  --max N            max hits per chapter file (default ' + MAX_HITS_PER_FILE + ')',
      '  --json             output machine-readable JSON',
      '  --list             list every chapter with its plugin-relative path',
      '  --version          print version',
      '  --help             print this help',
      ''
    ].join('\n')
  );
}

function main(argv) {
  const args = argv.slice(2);
  const opts = {
    context: 0,
    filesOnly: false,
    section: null,
    caseSensitive: false,
    max: MAX_HITS_PER_FILE,
    json: false,
    list: false
  };
  const queryParts = [];

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--version' || a === '-v') {
      process.stdout.write(VERSION + '\n');
      return 0;
    }
    if (a === '--help' || a === '-h') {
      usage();
      return 0;
    }
    if (a === '--list') { opts.list = true; continue; }
    if (a === '--files-only') { opts.filesOnly = true; continue; }
    if (a === '--case-sensitive') { opts.caseSensitive = true; continue; }
    if (a === '--json') { opts.json = true; continue; }
    if (a === '--context') {
      const v = parseInt(args[++i], 10);
      if (isNaN(v) || v < 0) { process.stderr.write('kick-saas-search: --context needs a non-negative integer\n'); return 1; }
      opts.context = v;
      continue;
    }
    if (a === '--max') {
      const v = parseInt(args[++i], 10);
      if (isNaN(v) || v < 1) { process.stderr.write('kick-saas-search: --max needs a positive integer\n'); return 1; }
      opts.max = v;
      continue;
    }
    if (a === '--section') {
      const v = args[++i];
      if (!v) { process.stderr.write('kick-saas-search: --section needs a value\n'); return 1; }
      opts.section = v.toLowerCase();
      continue;
    }
    if (a.startsWith('--')) {
      process.stderr.write('kick-saas-search: unknown option "' + a + '"\n');
      usage();
      return 1;
    }
    queryParts.push(a);
  }

  if (!fs.existsSync(BOOK_DIR)) {
    process.stderr.write('kick-saas-search: book directory not found at ' + BOOK_DIR + '\n');
    return 1;
  }

  let chapters = collectChapters(BOOK_DIR, []);
  if (opts.section) {
    chapters = chapters.filter(function (f) {
      return toBookPath(f).toLowerCase().indexOf(opts.section) !== -1;
    });
  }
  chapters.sort();

  if (opts.list) {
    if (opts.json) {
      process.stdout.write(JSON.stringify({ book: BOOK_DIR, count: chapters.length, chapters: chapters.map(toBookPath) }, null, 2) + '\n');
      return 0;
    }
    process.stdout.write('Chapters in the bundled book (' + chapters.length + '):\n\n');
    for (const f of chapters) process.stdout.write('  book/' + toBookPath(f) + '\n');
    return 0;
  }

  const query = queryParts.join(' ').trim();
  if (!query) {
    process.stderr.write('kick-saas-search: no query given\n\n');
    usage();
    return 1;
  }

  const needle = opts.caseSensitive ? query : query.toLowerCase();
  const results = [];

  for (const file of chapters) {
    let raw;
    try {
      raw = fs.readFileSync(file, 'utf8');
    } catch (e) {
      continue;
    }
    const lines = raw.split(/\r?\n/);
    const hits = [];
    for (let i = 0; i < lines.length; i++) {
      const hay = opts.caseSensitive ? lines[i] : lines[i].toLowerCase();
      if (hay.indexOf(needle) !== -1) {
        hits.push(i);
        if (hits.length >= opts.max) break;
      }
    }
    if (hits.length === 0) continue;

    if (opts.filesOnly) {
      results.push({ file: 'book/' + toBookPath(file), hits: hits.length, lines: [] });
      continue;
    }

    const rendered = [];
    for (const idx of hits) {
      const entry = { line: idx + 1, text: lines[idx].trim() };
      if (opts.context > 0) {
        entry.before = [];
        entry.after = [];
        for (let k = Math.max(0, idx - opts.context); k < idx; k++) entry.before.push(lines[k]);
        for (let k = idx + 1; k <= Math.min(lines.length - 1, idx + opts.context); k++) entry.after.push(lines[k]);
      }
      rendered.push(entry);
    }
    results.push({ file: 'book/' + toBookPath(file), hits: hits.length, lines: rendered });
  }

  const totalHits = results.reduce(function (s, r) { return s + r.hits; }, 0);

  if (opts.json) {
    process.stdout.write(JSON.stringify({ query: query, book: BOOK_DIR, files: results.length, hits: totalHits, results: results }, null, 2) + '\n');
    return 0;
  }

  if (results.length === 0) {
    process.stdout.write('No matches for "' + query + '" in ' + chapters.length + ' chapters.\n');
    return 0;
  }

  process.stdout.write('Query: "' + query + '"  |  ' + totalHits + ' hit(s) in ' + results.length + ' chapter(s)\n\n');
  for (const r of results) {
    if (opts.filesOnly) {
      process.stdout.write(r.hits + '\t' + r.file + '\n');
      continue;
    }
    process.stdout.write(r.file + '  (' + r.hits + ' hit' + (r.hits === 1 ? '' : 's') + ')\n');
    for (const entry of r.lines) {
      if (opts.context > 0) {
        for (const b of entry.before) process.stdout.write('      ' + b + '\n');
        process.stdout.write('  ' + entry.line + ': ' + entry.text + '\n');
        for (const a of entry.after) process.stdout.write('      ' + a + '\n');
      } else {
        process.stdout.write('  ' + entry.line + ': ' + entry.text + '\n');
      }
    }
    process.stdout.write('\n');
  }

  return 0;
}

process.exit(main(process.argv));
