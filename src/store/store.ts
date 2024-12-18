import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import languageReducer from './language/languageSlice';
import userReducer from './user/userSlice';
import notesReducer from './notes/notesSlice';
import rootSaga from './rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store
const store = configureStore({
  reducer: {
    language: languageReducer,
    user: userReducer,
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
