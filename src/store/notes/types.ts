export const ADD_NOTE = 'ADD_NOTE' as const;
export const DELETE_NOTE = 'DELETE_NOTE' as const;

export interface Note {
  createdOn?: string;
  description: string;
  id: number | string;
  progress?:  'done' | 'in-progress' | 'to-do';
  title: string;
}

export interface NotesState {
  notes: Note[];
}

interface AddNoteAction {
  payload: Note;
  type: typeof ADD_NOTE;
}

interface DeleteNoteAction {
  payload: number;
  type: typeof DELETE_NOTE;
}

export type NotesActionTypes = AddNoteAction | DeleteNoteAction;
