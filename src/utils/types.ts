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
  CREDIT = 'credit-card',
  DONATIONS = 'donations',
  GROCERIES = 'groceries',
  MEDICAL = 'medical',
  OTHER = 'other',
  OUTING = 'outing',
  PERSONAL_CARE = 'personal-care',
  RENT = 'rent',
  SHOPPING = 'shopping',
  SUBSCRIPTIONS = 'subscriptions',
  TRANSPORTATIONS = 'transportations',
  UTILITIES = 'utilities',
  VACATION = 'vacation',
}
