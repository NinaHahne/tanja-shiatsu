import { loadTranslations, localeFromPathname } from '$lib/translations.js';
import type { SiteData } from '$lib/site';
import { siteData } from '$lib/site';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url }) => {
  const { pathname } = url;
  const locale = localeFromPathname(pathname);
  await loadTranslations(locale, pathname);
  return {
    site: siteData as SiteData,
  };
};
