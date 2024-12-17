import type { NotesActionTypes, NotesState } from './types';
import { ADD_NOTE, DELETE_NOTE } from './types';

const initialState: NotesState = {
  notes: [],
};

export default function notesReducer(
  state = initialState,
  action: NotesActionTypes
): NotesState {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return { ...state, notes: state.notes.filter((note) => note.id !== action.payload) };
    default:
      return state;
  }
}
