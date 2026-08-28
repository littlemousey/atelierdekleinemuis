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
- `src/content/{verhalen,recepten,gedichten}/` — the writing, as Markdown with frontmatter (title, description, dates, order)
- `src/pages/` — one file per route
- `src/data/mice.ts` — the 18 mice and their five naming eras
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

## Adding a story, recipe or poem
Create a new `.md` file in `src/content/verhalen/`, `src/content/recepten/` or
`src/content/gedichten/`. The filename becomes the URL.
Copy the frontmatter block from an existing story; `order` controls its position in the
table of contents and the previous/next links. It is added to the sitemap and RSS feed
automatically.

## Deployment
The site deploys to **GitHub Pages** at <https://atelierdekleinemuis.nl> on every push to
`main`, via `.github/workflows/deploy.yml`. `public/CNAME` holds the custom domain.

One-time setup in the GitHub repo: **Settings → Pages → Source: GitHub Actions**, and point
the domain's DNS at GitHub Pages (four `A` records for the apex, or a `CNAME` for `www`).

The domain is configured in one place: `site` in `astro.config.mjs`. It drives canonical
URLs, Open Graph tags, `sitemap-index.xml` and the RSS feed. It also appears in
`public/robots.txt` and `public/CNAME`. Because the site runs on its own apex domain,
no `base` path is needed.

## Dark mode
`src/styles/dark.css` derives a dark ground for the Classical system, following the rules
its own readme sets out (deep warm near-black, accent stepping to `--color-accent-400`,
elevation as "a hairline edge + ambient darkness"). The neutral and accent ramps are
*reversed* rather than recoloured, so step 100 stays nearest the ground and every component
class keeps its intended contrast without being restyled.

It follows the reader's system preference; the "Lamp uit / Lamp aan" toggle in the header
overrides that and persists in `localStorage`. A small inline script in `BaseHead.astro`
applies the saved choice before first paint, so there is no flash of the wrong ground.

Every text role clears WCAG AA (4.5:1, or 3:1 for accent used as interface chrome) in both
grounds. Small text uses `--color-neutral-700`; the lighter 500/600 steps do not pass on the
light ground and should not be used for type.

## Usage
Everyone is allowed to share this code and change the code, but ONLY for non-commercial use. When sharing the stories or creating a new version of the code and stories, you always need to place a reference to the original version.
