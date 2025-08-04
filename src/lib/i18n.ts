export type Translated<T> = {
  [locale: string]: T;
};

type TranslateOptions = {
  fallback?: string;
};

export function translate<T>(
  locale: string,
  translated: Translated<T>,
  { fallback }: TranslateOptions = {}
): T | undefined {
  return translated[locale] ?? (fallback ? translated[fallback] : undefined);
}
