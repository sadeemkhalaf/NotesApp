import type { LanguageActionTypes } from './types';
import { SET_LANGUAGE } from './types';

export const setLanguage = (language: 'ar' | 'en'): LanguageActionTypes => ({
    payload: language,
    type: SET_LANGUAGE,
});
