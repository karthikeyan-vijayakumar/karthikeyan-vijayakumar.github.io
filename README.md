# karthikeyan-vijayakumar.github.io

Single-page static portfolio for GitHub Pages (no backend, no build step).

## Structure

- `/index.html` — the site: Hero, About, Architecture domains, Experience, Case Studies, Certifications, Contact
- `/assets/css/styles.css` — design system (graphite/blueprint theme, brass accent)
- `/assets/js/main.js` — mobile nav, scroll-spy, reveal-on-scroll, footer year
- `/assets/img/profile.jpg` — profile photo
- `/assets/img/favicon.svg` — favicon
- `about.html`, `resume.html`, `achievements.html`, `certifications.html`, `contact.html` — legacy URLs, redirect to the matching section of `index.html` so old links still work

## Fonts

Space Grotesk (display), Inter (body), IBM Plex Mono (labels/metrics) via Google Fonts CDN.

## Update content

All content lives in `index.html`. Sourced from resume — update the relevant section (About, Experience, Case Studies, Certifications) directly in the markup.

## Deployment

Push to the default branch; GitHub Pages serves the static files.
