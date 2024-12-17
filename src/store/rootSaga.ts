import { all } from 'redux-saga/effects';
import languageSaga from './language/saga';
import notesSaga from './notes/saga';

// Combine all sagas
export default function* rootSaga() {
  yield all([languageSaga(), notesSaga()]);
}
