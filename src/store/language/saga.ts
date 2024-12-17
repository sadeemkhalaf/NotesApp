import { SET_LANGUAGE } from './types';
import { takeLatest } from 'redux-saga/effects';

export interface SetLanguageAction {
  payload: 'ar-AR' | 'en-EN';
  type: typeof SET_LANGUAGE;
}

function* handleLanguageChange(action: SetLanguageAction) {
  // Perform side effects here if needed
  console.log(`Language changed to: ${action.payload}`);
}

export default function* languageSaga() {
  yield takeLatest(SET_LANGUAGE, handleLanguageChange);
}
