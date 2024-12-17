import 'intl-pluralrules';

import type { Language } from '@/hooks/language/schema';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-EN.json';
import ar from './ar-AR.json';

export const defaultNS = 'notesapp' as const;

export const resources = {
  'ar-AR': ar,
  'en-EN': en,
} as const satisfies Record<Language, unknown>;

i18n
  .use(initReactI18next)
  .init({
    defaultNS,
    fallbackLng: 'ar-AR',
    lng: 'ar-AR',
    resources,
  })
  .then(() => {
    // add capitalization formatter
    i18n.services.formatter?.add(
      'capitalize',
      (value: string) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    );
  });

export default i18n;
