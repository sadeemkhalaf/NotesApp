
export const SET_LANGUAGE = 'SET_LANGUAGE' as const;

export interface LanguageState {
    language: 'ar-AR' | 'en-EN';
}

interface SetLanguageAction {
    payload: 'ar-AR' | 'en-EN';
    type: typeof SET_LANGUAGE;
}

export type LanguageActionTypes = SetLanguageAction;
