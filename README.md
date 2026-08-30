# Atelier de kleine muis

Repository of the website Atelier de kleine muis.
Built with [Astro](https://astro.build/) as a fully static site (no server-side rendering, no database).

## How to run
- You need Node.js 18.20 or higher (developed on Node 22).
- Clone the repository
- Run `npm install`
- Run `npm run dev` and open http://localhost:4321

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check the Astro and TypeScript files |
| `npm run lint` | Lint with ESLint (`npm run lint:fix` to autofix) |

Open <http://localhost:4321> after `npm run dev`. Every page hot-reloads on save.

## Structure
- `src/content/verhalen/` and `src/content/gedichten/` — prose and poems, as Markdown
- `src/content/recepten/` — recipes: `ingredients`, `steps`, `needs` and `tip` live in the
  frontmatter as lists, not prose. That drives the two-column layout **and** fills in
  `recipeIngredient` / `recipeInstructions` for search engines, which is what earns a recipe
  rich result. Times are `prepMinutes` (hands-on) and, where a recipe waits unattended,
  `restMinutes` + `restNote` — both in minutes, formatted by `src/lib/duration.ts`. Waiting
  has no schema.org property of its own, so it is folded into `totalTime`, which is what a
  reader must actually plan for. Omit a field and its part of the meta line disappears.
- `src/pages/` — one file per route
- `src/data/mice.ts` — the 18 mice and their five naming eras
- `src/data/kunst.ts` — the drawings in the art gallery
- `src/assets/kunst/` — the drawings themselves. Unlike `public/`, files here go through
  Astro's build-time image pipeline: each one is resized and converted to WebP, so a 14 MB
  source PNG reaches the reader as a ~30 kB thumbnail
- `src/data/projects.ts` — the projects gallery
- `src/data/greetings.ts` — "little mouse" in ten languages, for the landing hero
- `src/components/BaseHead.astro` — all SEO metadata (title, description, canonical, Open Graph, JSON-LD)
- `src/styles/classical.css` — the Classical design system, vendored from Claude Design. **Read-only**: retune the look at its `:root` tokens
- `src/styles/global.css` — site layout, built only from those tokens
- `public/` — images, favicon, robots.txt
- `eslint.config.js` — ESLint flat config (`eslint-plugin-astro` + `typescript-eslint`)

## Design system
The look comes from **Classical**, an editorial book-like system: Cormorant Garamond headings
over Lora body, a soft near-white ground, a single gold accent applied as stroke rather than
fill, hairline rules and justified columns. Photographs go through the `.plate` wrapper.
Take every color, font and spacing value from the `var(--color-*)`, `var(--font-*)`,
`var(--space-*)` and `var(--radius-*)` tokens — never hard-code a hex or a px a token carries.

## Adding a mouse
Add an entry to `MICE` in `src/data/mice.ts` and drop a square portrait in
`public/img/avatars/`. The `from` / `to` fields are the life period: leave them empty and the
period line simply does not render, so they can be filled in later without touching the markup.

## Adding a drawing
Drop the image in `src/assets/kunst/` and add an entry to `ARTWORKS` in `src/data/kunst.ts`:
import the file at the top, then give it a `title`, a `collection` (the rail groups in
`COLLECTIONS`), a `medium`, a `year` and an `alt`. Astro sizes and converts the image at
build time — the source can be as large as it likes, and no thumbnail needs making by hand.

`year` works like the mice's `from` / `to`: leave it empty and the meta line drops it, so an
undated drawing simply does not appear under a year. Fill one in and that year shows up in
the rail on its own.

`alt` describes the drawing itself rather than calling it decoration — here the image *is*
the content.

## Adding a story, recipe or poem
Create a new `.md` file in `src/content/verhalen/`, `src/content/recepten/` or
`src/content/gedichten/`. The filename becomes the URL.
Copy the frontmatter block from an existing story; `order` controls its position in the
table of contents and the previous/next links. It is added to the sitemap and RSS feed
automatically.

## Deployment
The site is published by uploading the **contents of `dist/`** to the web host over FTP.

1. `npm run build` — writes the finished site to `dist/`
2. Upload **everything inside `dist/`** (not the folder itself) to the web root
   of atelierdekleinemuis.nl — usually `public_html`, `www` or `httpdocs`
3. That's all: it is plain HTML, CSS and images. No Node.js runs on the server.

`dist/` is regenerated from scratch by every build and is not committed to git —
only the source lives in the repo.

URLs end in a slash (`/verhalen/`), which is exactly what Apache and nginx serve
for a directory. That means no redirects, no `.htaccess`, and canonical tags that
match the served URL precisely.

The domain is configured in one place: `site` in `astro.config.mjs`. It drives canonical
URLs, Open Graph tags, `sitemap-index.xml` and the RSS feed. It also appears in
`public/robots.txt`. Update both if the site ever moves.

## Dark mode
`src/styles/dark.css` derives a dark ground for the Classical system, following the rules
its own readme sets out (deep warm near-black, accent stepping to `--color-accent-400`,
elevation as "a hairline edge + ambient darkness"). The neutral and accent ramps are
*reversed* rather than recoloured, so step 100 stays nearest the ground and every component
class keeps its intended contrast without being restyled.

It follows the reader's system preference; the "Donker thema / Licht thema" toggle in the
header overrides that and persists in `localStorage`. A small inline script in `BaseHead.astro`
applies the saved choice before first paint, so there is no flash of the wrong ground.

Every text role clears WCAG AA (4.5:1, or 3:1 for accent used as interface chrome) in both
grounds. Small text uses `--color-neutral-700`; the lighter 500/600 steps do not pass on the
light ground and should not be used for type.

## Usage
Everyone is allowed to share this code and change the code, but ONLY for non-commercial use. When sharing the stories or creating a new version of the code and stories, you always need to place a reference to the original version.

## The reader
Story pages carry the reading controls from the design: **A− / A+** for text size (15–24 px)
and **Breedte** for line width (66 or 82 characters). Both persist in `localStorage` and are
applied before first paint, so there is no flash at the old size.

They set `--reader-size` and `--reader-measure` on `<html>`, and `.prose` reads those
variables — so a size chosen while reading a story carries over to the recipes and poems too.

Two details that make it read like a book:

- **Drop cap.** The opening letter is set large in the heading face. Which paragraph gets it
  is computed from the Markdown, so a story that opens with an epigraph (a haiku in italics,
  as *De molenaar van Maarssen* does) skips it and the cap lands on the first real prose.
  Counted inside `.prose__body` so the kicker and byline above don't shift it.
- **Chapter rail.** Built from real `##` headings in the story. None of the stories have
  chapter headings today, so no rail appears. Add `## Hoofdstuknaam` lines to a story and the
  rail shows up on its own, numbered in lower-case roman — no code change needed.

## Atelier layouts
Recipes, poems and the art gallery follow the design's own treatments:

- **Recipes** put ingredients and equipment in a left column and numbered steps on the right,
  with the tip in an accent-bordered callout. The meta line reads
  "Ontbijt · 1 portie · 5 minuten klaarmaken · 8 uur wachten in koelkast"; the recipe index
  shows the compact form ("5 min").
- **Poems** get one per page with generous leading, an index rail, and
  "← vorige · 01 / 02 · volgende →" underneath.
- **Kunst** is a masonry of matted plates with a filter rail (collection and year) beside it;
  clicking a plate opens it large. The drawings keep their own proportions instead of being
  cropped square, and get a mat rather than the sepia `.plate` treatment, which would drain
  the colour out of them. On a phone the title comes first, then the filters, then two
  columns of plates.

Adding a poem or recipe renumbers and re-links everything automatically — the counters and
prev/next come from collection order, not hard-coded numbers.
