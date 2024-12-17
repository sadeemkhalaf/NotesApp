import { NoteCategoryEnums } from "@/utils/types";

export interface NotesDetails {
  createdOn: string;
  description: string;
  id?: string;
  title: string;
}


export const testData: NotesDetails[] = [
  {
    createdOn: new Date().toISOString(),
    description: "",
    id: '99389',
    title: NoteCategoryEnums.CREDIT
  },
  {
    createdOn: '2023-01-08T23:27:31.476Z',
    description: "",
    id: '99389',
    title: NoteCategoryEnums.PERSONAL_CARE,
  },
];
