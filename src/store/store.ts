import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import languageReducer from './language/language.Slice';
import userReducer from './user/user.Slice';
import notesReducer from './notes/notes.Slice';
import rootSaga from './root.Saga';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  notes: notesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'user', 'notes'], // Reducers you want to persist
};

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store
// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Persistor
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
