import 'intl-pluralrules';
import type { Language } from '@/hooks/language/schema';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-EN.json';
import ar from './ar-AR.json';
import store from '@/store/store';

export const defaultNS = 'notesapp' as const;

export const resources = {
  ar,
  en,
} as const satisfies Record<Language, unknown>;

i18n
  .use(initReactI18next)
  .init({
    defaultNS,
    fallbackLng: 'ar', // Fallback language
    lng: store.getState().language.language, // Read the initial language from Redux
    resources,
  })
  .then(() => {
    i18n.services.formatter?.add(
      'capitalize',
      (value: string) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    );
  });

// Subscribe to language changes in the Redux store
store.subscribe(() => {
  const state = store.getState();
  const currentLanguage = state.language.language;
  if (i18n.language !== currentLanguage) {
    i18n.changeLanguage(currentLanguage); 
  }
});

export default i18n;
