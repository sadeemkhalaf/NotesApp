import { all } from 'redux-saga/effects';
import { watchLanguageSaga } from './language/language.Saga';
import { watchUserSaga } from './user/user.Saga';
import { watchNotesSaga } from './notes/notes.Saga';

export default function* rootSaga() {
  yield all([watchLanguageSaga(), watchUserSaga(), watchNotesSaga()]);
}
