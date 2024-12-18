import { takeLatest } from 'redux-saga/effects';
import { login, logout } from './userSlice';

function* handleLogin(action: ReturnType<typeof login>) {
  console.log(`User logged in with email: ${action.payload}`);
  yield; // Placeholder for async logic
}

function* handleLogout() {
  console.log(`User logged out`);
  yield; // Placeholder for async logic
}

export function* watchUserSaga() {
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(logout.type, handleLogout);
}
