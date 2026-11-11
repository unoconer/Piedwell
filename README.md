# Piedwell: Website

A one-page site for Piedwell, which provides Solo and self-directed 401(k) plan support from an
office in Charlotte, North Carolina. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://piedwell.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `piedwell`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under North Carolina law
plus `/thank-you/` and `404.html`.

## Office

Piedwell is a **storefront office** (`locationType: 'office'`) at **10101 David Taylor Dr #101,
Charlotte, NC 28262**, phone **(704) 666-9328**. The address shows in the hero card, footer and contact
section, with a map and storefront structured data. Keep it identical to the Google Business Profile.

## Design

- **Palette:** Queen City plum `#2A1B33`, Carolina blue `#4B9CD3` (buttons, dark text), violet `#6B3E8A`, light blue `#9CC9EA`, soft white `#FAF8FB`
- **Type:** Lora (display) and Mulish (text), both self-hosted
- **Logo:** a droplet (the "well") holding layered Piedmont hills (`src/brand.mjs`)
- **Hero:** slow-zoom photo of the Charlotte skyline above the tree canopy (no verified Charlotte video was available)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
