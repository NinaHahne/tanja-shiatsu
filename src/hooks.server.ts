import { localeFromPathname } from '$lib/translations';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const locale = localeFromPathname(event.url.pathname);
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replaceAll('%locale%', locale),
  });
}) satisfies Handle;
