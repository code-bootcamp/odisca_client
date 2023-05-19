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
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type IAdminister = {
  __typename?: "Administer";
  deletedAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
};

export type ICancelPointTransactionInput = {
  impUid: Scalars["String"];
};

export type ICreateAdministerInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type ICreatePointTransactionInput = {
  amount: Scalars["Int"];
  impUid: Scalars["String"];
};

export type ICreateReviewInput = {
  content: Scalars["String"];
  visitId: Scalars["String"];
};

export type ICreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type ILoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  LoginAdminister: Scalars["String"];
  LoginUser: Scalars["String"];
  cancelLoginPointTransaction: IPointTransaction;
  checkVerificationCode: Scalars["String"];
  createAdminister: IAdminister;
  createLoginPointTransaction: IPointTransaction;
  createReview: IReview;
  createUser: IUser;
  deleteLoginAdminister: Scalars["Boolean"];
  deleteLoginUser: Scalars["Boolean"];
  logout: Scalars["String"];
  restoreAccessToken: Scalars["String"];
  sendVerificationCode: Scalars["String"];
  updateLoginAdminister: IAdminister;
  updateLoginUser: IUser;
  updateReview: IReview;
  createLoginStudyCafe: IStudyCafe;
};

export type IMutationLoginAdministerArgs = {
  loginInput: ILoginInput;
};

export type IMutationLoginUserArgs = {
  loginInput: ILoginInput;
};

export type IMutationCancelLoginPointTransactionArgs = {
  cancelPointTransactionInput: ICancelPointTransactionInput;
};

export type IMutationCheckVerificationCodeArgs = {
  verificationCode: Scalars["String"];
};

export type IMutationCreateAdministerArgs = {
  createAdministerInput: ICreateAdministerInput;
};

export type IMutationCreateLoginPointTransactionArgs = {
  createPointTransactionInput: ICreatePointTransactionInput;
};

export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationSendVerificationCodeArgs = {
  email: Scalars["String"];
};

export type IMutationUpdateLoginAdministerArgs = {
  updateLoginAdministerInput: IUpdateLoginAdministerInput;
};

export type IMutationUpdateLoginUserArgs = {
  updateLoginUserInput: IUpdateLoginUserInput;
};

export type IMutationUpdateReviewArgs = {
  updateReviewInput: IUpdateReviewInput;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT",
}

export type IPointTransaction = {
  __typename?: "PointTransaction";
  amount: Scalars["Int"];
  date: Scalars["DateTime"];
  id: Scalars["String"];
  impUid: Scalars["String"];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchLoginAdminister: IAdminister;
  fetchLoginUser: IUser;
  fetchStudyCafes?: Maybe<Scalars["String"]>;
  fetchLoginStudyCafes: IStudyCafe;
};

export type IReview = {
  __typename?: "Review";
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  user: IUser;
  visit: IVisit;
};

export type ISeat = {
  __typename?: "Seat";
  expiredTime: Scalars["Int"];
  id: Scalars["String"];
  location: Scalars["String"];
  number: Scalars["String"];
  studyCafe: IStudyCafe;
  user: IUser;
};

export type IStudyCafe = {
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
};

export type IUpdateLoginAdministerInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type IUpdateLoginUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type IUpdateReviewInput = {
  content: Scalars["String"];
  reviewId: Scalars["String"];
  visitId: Scalars["String"];
};

export type IUser = {
  __typename?: "User";
  deletedAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  image: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
};

export type IVisit = {
  __typename?: "Visit";
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  review: IReview;
  studyCafe: IStudyCafe;
  user: IUser;
};
