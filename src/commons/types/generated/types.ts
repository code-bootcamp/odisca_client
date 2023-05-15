export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}

export interface IAdminister {
  __typename?: "Administer";
  email: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
}

export interface ICreateAdministerInput {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
}

export interface ICreatePointTransactionInput {
  amount: Scalars["Int"];
  impUid: Scalars["String"];
}

export interface ICreateReviewInput {
  content: Scalars["String"];
  visitId: Scalars["String"];
}

export interface ICreateUserInput {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
}

export interface ILoginInput {
  email: Scalars["String"];
  password: Scalars["String"];
}

export interface IMutation {
  __typename?: "Mutation";
  Login: Scalars["String"];
  createAdminister: IAdminister;
  createPointTransaction: IPointTransaction;
  createReview: IReview;
  createUser: IUser;
  updateLoginAdminister: IAdminister;
  updateLoginUser: IUser;
}

export interface IMutationLoginArgs {
  loginInput: ILoginInput;
}

export interface IMutationCreateAdministerArgs {
  createAdministerInput: ICreateAdministerInput;
}

export interface IMutationCreatePointTransactionArgs {
  createPointTransactionInput: ICreatePointTransactionInput;
}

export interface IMutationCreateReviewArgs {
  createReviewInput: ICreateReviewInput;
}

export interface IMutationCreateUserArgs {
  createUserInput: ICreateUserInput;
}

export interface IMutationUpdateLoginAdministerArgs {
  updateLoginAdministerInput: IUpdateLoginAdministerInput;
}

export interface IMutationUpdateLoginUserArgs {
  updateLoginUserInput: IUpdateLoginUserInput;
}

export enum IPoint_Transaction_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT",
}

export interface IPointTransaction {
  __typename?: "PointTransaction";
  amount: Scalars["Int"];
  date: Scalars["DateTime"];
  id: Scalars["String"];
  impUid: Scalars["String"];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
}

export interface IQuery {
  __typename?: "Query";
  fetchLoginAdminister: IAdminister;
  fetchLoginUser: IUser;
  fetchStudyCafes?: Maybe<Scalars["String"]>;
}

export interface IReview {
  __typename?: "Review";
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  user: IUser;
  visit: IVisit;
}

export interface ISeat {
  __typename?: "Seat";
  expiredTime: Scalars["Int"];
  id: Scalars["String"];
  number: Scalars["String"];
  studyCafe: IStudyCafe;
  user: IUser;
}

export interface IStudyCafe {
  __typename?: "StudyCafe";
  address: Scalars["String"];
  administer: IAdminister;
  brn: Scalars["String"];
  contact: Scalars["String"];
  description: Scalars["String"];
  floorPlanX: Scalars["Int"];
  floorPlanY: Scalars["Int"];
  id: Scalars["String"];
  lat: Scalars["Float"];
  lon: Scalars["Float"];
  name: Scalars["String"];
  operatingTime: Scalars["String"];
  seatCount: Scalars["Int"];
  timeFee: Scalars["Int"];
}

export interface IUpdateLoginAdministerInput {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
}

export interface IUpdateLoginUserInput {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
}

export interface IUser {
  __typename?: "User";
  deletedAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["String"];
  image: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
}

export interface IVisit {
  __typename?: "Visit";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  review: IReview;
  studyCafe: IStudyCafe;
  user: IUser;
}
