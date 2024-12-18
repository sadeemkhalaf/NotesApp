import { all } from 'redux-saga/effects';
import { watchLanguageSaga } from './language/languageSaga';
import { watchUserSaga } from './user/userSaga';
import { watchNotesSaga } from './notes/notesSaga';

export default function* rootSaga() {
  yield all([watchLanguageSaga(), watchUserSaga(), watchNotesSaga()]);
}
