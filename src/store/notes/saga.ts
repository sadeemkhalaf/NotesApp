import { put, takeLatest } from 'redux-saga/effects';
import type { Note } from './types';
import { ADD_NOTE, DELETE_NOTE } from './types';

// Define the action shape
interface AddNoteAction {
  payload: Note;
  type: typeof ADD_NOTE;
}

function* handleAddNote(action: AddNoteAction) {
  console.log('Note added:', action.payload);
}

function* handleDeleteNote(action: { payload: number; type: typeof DELETE_NOTE }) {
  console.log('Note deleted with id:', action.payload);
}

export default function* notesSaga() {
  yield takeLatest(ADD_NOTE, handleAddNote);
  yield takeLatest(DELETE_NOTE, handleDeleteNote);
}
