
export const SET_LANGUAGE = 'SET_LANGUAGE' as const;

export interface LanguageState {
    language: 'ar' | 'en';
}

interface SetLanguageAction {
    payload: 'ar' | 'en';
    type: typeof SET_LANGUAGE;
}

export type LanguageActionTypes = SetLanguageAction;
