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

## Structure
- `src/content/verhalen/` — the stories, as Markdown with frontmatter (title, description, dates, order)
- `src/pages/` — one file per route
- `src/data/mice.ts` — the mice on the Wall of fame
- `src/components/BaseHead.astro` — all SEO metadata (title, description, canonical, Open Graph, JSON-LD)
- `src/styles/global.css` — design tokens and styling
- `public/` — images, favicon, robots.txt
- `eslint.config.js` — ESLint flat config (`eslint-plugin-astro` + `typescript-eslint`)

## Adding a story
Create a new `.md` file in `src/content/verhalen/`. The filename becomes the URL.
Copy the frontmatter block from an existing story; `order` controls its position in the
table of contents and the previous/next links. It is added to the sitemap and RSS feed
automatically.

## Deployment
`npm run build` writes a plain static site to `dist/` that can be hosted anywhere
(GitHub Pages, Netlify, Cloudflare Pages, Vercel, any web server).

The domain is configured in one place: `site` in `astro.config.mjs`. It drives canonical
URLs, Open Graph tags, `sitemap-index.xml` and the RSS feed. The domain also appears in
`public/robots.txt`. Update both if the site is published elsewhere.

## Usage
Everyone is allowed to share this code and change the code, but ONLY for non-commercial use. When sharing the stories or creating a new version of the code and stories, you always need to place a reference to the original version.
