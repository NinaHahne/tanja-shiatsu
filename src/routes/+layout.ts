import { loadTranslations, localeFromPathname } from '$lib/translations.js';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url }) => {
  const { pathname } = url;
  const locale = localeFromPathname(pathname);
  await loadTranslations(locale, pathname);
  return {};
};
