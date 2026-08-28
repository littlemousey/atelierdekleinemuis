import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: APIContext) {
  const [verhalen, recepten, gedichten] = await Promise.all([
    getCollection('verhalen'),
    getCollection('recepten'),
    getCollection('gedichten'),
  ]);

  const items = [
    ...verhalen.map((e) => ({ e, path: `/verhalen/${e.id}` })),
    ...recepten.map((e) => ({ e, path: `/atelier/recepten/${e.id}` })),
    ...gedichten.map((e) => ({ e, path: `/atelier/gedichten/${e.id}` })),
  ].sort((a, b) => b.e.data.pubDate.getTime() - a.e.data.pubDate.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    trailingSlash: false,
    items: items.map(({ e, path }) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: path,
    })),
    customData: '<language>nl-nl</language>',
  });
}
