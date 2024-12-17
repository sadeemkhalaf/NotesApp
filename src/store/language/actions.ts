import type { LanguageActionTypes } from './types';
import { SET_LANGUAGE } from './types';

export const setLanguage = (language: 'ar-AR' | 'en-EN'): LanguageActionTypes => ({
    payload: language,
    type: SET_LANGUAGE,
});
