import { takeLatest } from 'redux-saga/effects';
import { setLanguage } from './language.Slice';

function* handleLanguageChange(action: ReturnType<typeof setLanguage>) {
  console.log(`Language changed to: ${action.payload}`);
  yield; // Placeholder for async logic
}

export function* watchLanguageSaga() {
  yield takeLatest(setLanguage.type, handleLanguageChange);
}
