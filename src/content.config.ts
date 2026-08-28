import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const verhalen = defineCollection({
  loader: glob({ base: './src/content/verhalen', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number(),
    type: z.enum(['verhaal', 'recept']).default('verhaal'),
  }),
});

export const collections = { verhalen };
