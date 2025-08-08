# New Literacies Alliance – Jekyll Site

This repository contains the static Jekyll site for newliteraciesalliance.org migrated away from WordPress. Assets are local or CDN-hosted. Site search has been removed.

## Prerequisites

- Ruby and Bundler

### Install Ruby and Bundler (Ubuntu/Debian example)

```bash
sudo apt-get update
sudo apt-get install -y ruby-full build-essential
gem install bundler
```

### Install project gems

```bash
bundle install
```

## Local development

Start a local server:

```bash
bundle exec jekyll serve
# Site at http://127.0.0.1:4000
```

For a production-like build:

```bash
bundle exec jekyll build
# Output in _site/
```

## Navigation and content discovery

There is no built-in site search. Use the primary navigation to access major sections:

- Available Lessons → `/available-lessons/`
- Using the Lessons → `/using-lessons/`
- For Librarians → `/for-librarians/`
- Process → `/process/`
- Research & Awards → `/research-awards/`
- About → `/about-us/`

## Google Analytics (GA4)

- Configure `ga4_measurement_id` in `_config.yml` (e.g., `G-XXXXXXXXXX`).
- The GA4 snippet is conditionally included by `_includes/head_clean.html`.

## Asset locations

- Tiny Framework CSS/JS: `styles/tiny-framework/`
- Images: `assets/images/` (a `.gitkeep` is present)

## Common tasks

- Serve locally:
  ```bash
  bundle exec jekyll serve
  ```
- Update GA4 ID:
  Edit `_config.yml` and set `ga4_measurement_id`.

## Structure overview

- Layouts: `_layouts/{page,home,default2}.html`
- Includes: `_includes/{head_clean,footer}.html`
- Home: `index.html`
- Lessons list: `available-lessons.html`
- Section stubs:
  - `about-us.md` → `/about-us/`
  - `about-us/join.md` → `/about-us/join/`
  - `for-librarians.md` → `/for-librarians/`
  - `using-lessons/index.md` → `/using-lessons/`
  - `using-lessons/popular-sequences.md` → `/using-lessons/popular-sequences/`
  - `using-lessons/get-lesson-links.md` → `/using-lessons/get-lesson-links/`
  - `process.md` → `/process/`
  - `research-awards.md` → `/research-awards/`

## Troubleshooting

- GA4 not firing:
  - Verify `ga4_measurement_id` is set in `_config.yml` and not empty.
- Missing images:
  - Place assets under `assets/images/` and ensure paths begin with `/assets/images/...`.
