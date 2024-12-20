export interface IUserDetails {
  createdOn?: string;
  email?: string;
  fullName?: string;
  mobileNumber?: string;
  userID?: string;
}

export interface ITempUserDetails extends IUserDetails {
  confirmPassword?: string;
  password?: string;
}

export interface NoteCategoryDetails {
  createdOn: string;
  description: string;
  id?: string;
  title: string;
}

export enum NoteCategoryEnums {
  DONE = 'done',
  IN_PROGRESS = 'in-progress',
  TODO = 'to-do',
}
