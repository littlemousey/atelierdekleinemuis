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

export const collections = {
  verhalen: collection('verhalen'),
  recepten: collection('recepten'),
  gedichten: collection('gedichten'),
};
