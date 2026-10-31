import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` drives canonical URLs, Open Graph tags and sitemap.xml.
// Change this one value if the site is published on another domain.
export default defineConfig({
  site: 'https://atelierdekleinemuis.nl',
  // Directory-style URLs ending in a slash: exactly what Apache and nginx
  // serve natively for a folder. public/.htaccess adds the slash when missing.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
