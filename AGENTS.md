# AGENTS.md

## Repo Overview

Static portfolio site for **Pongsit Yayapao (Beer)**. No build system, no package manager, no tests. Deployed to GitHub Pages.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Single entry point — all content lives here |
| `styles/style.css` | Custom styles (dark theme, color palette, layout) |
| `styles/font-prompt.css` | Prompt font weight utilities |
| `scripts/script.js` | Scroll-to-top button + image modal |
| `assets/` | Images (profile, certs, skill icons) |

## Stack

- **Bootstrap 5.3.3** via CDN (both CSS and JS bundle). The JS bundle is required — the image modal uses `bootstrap.Modal`.
- **Google Fonts**: Prompt (primary), Itim, Pacifico, Sriracha.
- No TypeScript, no bundler, no npm.

## Color Palette

| Token | Hex |
|-------|-----|
| Gold | `#857652` |
| Teal-green | `#4d7272` |
| Light text | `#bbb` |
| Dark bg | `#1d2020`, `#222`, `#111` |

## Development

Just edit files. Open `index.html` directly in a browser — no dev server or build step needed.

## Conventions

- **Content is immutable.** Do not change names, dates, descriptions, emails, phone numbers, GPA, or any factual portfolio data.
- **Only use HTML, CSS, and vanilla JS.** No additional frameworks, libraries, or build tools beyond what is already present (Bootstrap via CDN).
- Preserve the existing color palette and font choices unless explicitly asked otherwise.
- Animation refactor must not change any portfolio content/details — only enhance visual presentation.

## Known HTML Issues

- Line 28 of `index.html` has a malformed closing tag: `<br </div>` — present since before the session.
