import { combineReducers } from 'redux';
import languageReducer from './language/reducers';
import notesReducer from './notes/reducers';

// Combine reducers
export const rootReducer = combineReducers({
  language: languageReducer,
  notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
