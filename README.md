# The Log — samanpradhan.github.io

Saman Pradhan's portfolio, built as an attendance ledger. A visitor is punched IN by a live clock in the header and punched OUT in the footer with their time on the page; the content in between is a set of numbered entries with a monospace timestamp column, set in Newsreader and IBM Plex Mono on warm paper, with one stamp-red accent that only ever marks a stamp, a variance figure or the one pointer. Every reveal is a CSS scroll-timeline animation, gated behind `@supports` so browsers without scroll timelines get the finished static page, and everything holds up with `prefers-reduced-motion` on.

## Stack

None. Plain HTML, one stylesheet (`assets/css/styles.css`) and one small script (`assets/js/main.js`) that runs the clock, the time-on-page counter and the copy-address button. No build step, no framework, no bundler, no analytics, no third-party scripts. The only external request is the Google Fonts stylesheet.

## Running locally

Serve the repository root with any static file server, for example:

```
python3 -m http.server 8000
```

and open `http://localhost:8000/`. Links are root-relative, so the site has to be served from the root rather than opened as a file.

## Routes

| Route | File |
| --- | --- |
| `/` | `index.html` |
| `/work/` | `work/index.html` |
| `/work/nlp-to-sql/` | `work/nlp-to-sql/index.html` |
| `/about/` | `about/index.html` |
| `/contact/` | `contact/index.html` |
| unknown paths | `404.html` (GitHub Pages serves it automatically) |

`.nojekyll` at the root tells GitHub Pages to serve the files as they are.

## Archive

`archive/legacy-2026-09/` is the pre-2026 site (a Vite and React project, plus its earlier single-page predecessor under `old-archive/`). It is kept for reference only and is not served or linked from the new site.
