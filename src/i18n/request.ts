import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const store = await cookies();
  const SUPPORTED_LOCALES = ['en', 'es'] as const;
  const raw = store.get('locale')?.value || 'en';
  const locale = SUPPORTED_LOCALES.includes(raw as "en" | "es") ? raw : 'en';
  

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});