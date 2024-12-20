import type { Note } from "@/store/notes/notes.Slice";
import { NoteCategoryEnums } from "@/utils/types";

export interface NotesDetails {
  createdOn: string;
  description: string;
  id?: string;
  title: NoteCategoryEnums;
}


export const testData: Note[] = [
  {
    createdOn: new Date().toISOString(),
    description: "description of task",
    id: 99_389,
    status: NoteCategoryEnums.IN_PROGRESS,
    title: "test task",
  },
];
