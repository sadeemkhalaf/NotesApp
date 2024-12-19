import { takeLatest } from 'redux-saga/effects';
import { addNote, deleteNote, editNote } from './notes.Slice';

function* handleAddNote(action: ReturnType<typeof addNote>) {
  console.log('Task added:', action.payload);
}

function* handleEditNote(action: ReturnType<typeof editNote>) {
  console.log('Task edited:', action.payload);
}

function* handleDeleteNote(action: ReturnType<typeof deleteNote>) {
  console.log('Task deleted with ID:', action.payload);
}

export function* watchNotesSaga() {
  yield takeLatest(addNote.type, handleAddNote);
  yield takeLatest(editNote.type, handleEditNote);
  yield takeLatest(deleteNote.type, handleDeleteNote);
}
