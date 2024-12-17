import type { Note } from './types';
import { ADD_NOTE, DELETE_NOTE } from './types';

export const addNote = (note: Note) => ({
  payload: note,
  type: ADD_NOTE,
});

export const deleteNote = (id: number) => ({
  payload: id,
  type: DELETE_NOTE,
});
