import type { LanguageActionTypes, LanguageState } from './types';
import { SET_LANGUAGE } from './types';

const initialState: LanguageState = {
  language: 'en-EN',
};

export default function languageReducer(
  state = initialState,
  action: LanguageActionTypes
): LanguageState {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
