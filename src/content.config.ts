import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  order: z.number(),
});

const collection = (dir: string) =>
  defineCollection({
    loader: glob({ base: `./src/content/${dir}`, pattern: '**/*.md' }),
    schema: base,
  });

// Recipes carry their parts as data, not prose: it drives the two-column
// layout and fills in recipeIngredient / recipeInstructions for search engines.
const recepten = defineCollection({
  loader: glob({ base: './src/content/recepten', pattern: '**/*.md' }),
  schema: base.extend({
    category: z.string(),
    servings: z.string(),
    /** Active hands-on minutes. */
    prepMinutes: z.number().optional(),
    /** Unattended waiting — chilling, resting. Counts towards the total time
     *  a reader must plan for, but not towards the work. */
    restMinutes: z.number().optional(),
    /** What the waiting is, e.g. "wachten in koelkast". */
    restNote: z.string().optional(),
    needs: z.array(z.string()).default([]),
    ingredients: z.array(z.string()).default([]),
    steps: z.array(z.string()).default([]),
    tip: z.string().optional(),
  }),
});

// Losse prozapagina's (voorwoord, en wat er nog bij komt). Alleen een titel:
// de tekst wordt elders geschreven en hier ongewijzigd ingeplakt.
const paginas = defineCollection({
  loader: glob({ base: './src/content/paginas', pattern: '**/*.md' }),
  schema: z.object({ title: z.string() }),
});

export const collections = {
  verhalen: collection('verhalen'),
  recepten,
  gedichten: collection('gedichten'),
  paginas,
};
