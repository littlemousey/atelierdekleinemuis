import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: APIContext) {
  const verhalen = (await getCollection('verhalen')).sort(
    (a, b) => a.data.order - b.data.order,
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: verhalen.map((verhaal) => ({
      title: verhaal.data.title,
      description: verhaal.data.description,
      pubDate: verhaal.data.pubDate,
      link: `/verhalen/${verhaal.id}`,
    })),
    trailingSlash: false,
    customData: '<language>nl-nl</language>',
  });
}
