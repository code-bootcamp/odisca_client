export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAdminister = {
  __typename?: 'Administer';
  administer_deletedAt: Scalars['DateTime'];
  administer_email: Scalars['String'];
  administer_id: Scalars['String'];
  administer_name: Scalars['String'];
  administer_password: Scalars['String'];
  administer_phone: Scalars['String'];
  administer_point: Scalars['Int'];
  studyCafes: Array<IStudyCafe>;
};

export type ICancelPointTransactionInput = {
  pointTransaction_impUid: Scalars['String'];
};

export type ICancelReviewInput = {
  review_id: Scalars['String'];
};

export type ICreateAdministerInput = {
  administer_email: Scalars['String'];
  administer_name: Scalars['String'];
  administer_password: Scalars['String'];
  administer_phone: Scalars['String'];
};

export type ICreateCafeFloorPlanInput = {
  studyCafe_floorPlanX: Scalars['Int'];
  studyCafe_floorPlanY: Scalars['Int'];
  studyCafe_id: Scalars['String'];
  studyCafe_seatCount: Scalars['Int'];
};

export type ICreateImageInput = {
  image_isMain: Scalars['Boolean'];
  image_url?: InputMaybe<Scalars['String']>;
};

export type ICreatePaymentInput = {
  payment_point: Scalars['Int'];
  payment_time: Scalars['Int'];
  seat_id: Scalars['String'];
  studyCafe_id: Scalars['String'];
};

export type ICreatePaymentObject = {
  __typename?: 'CreatePaymentObject';
  payment: IPayment;
  seat: ISeat;
  studyCafe: IStudyCafe;
};

export type ICreatePointTransactionInput = {
  pointTransaction_amount: Scalars['Int'];
  pointTransaction_impUid: Scalars['String'];
};

export type ICreateReviewInput = {
  review_content: Scalars['String'];
  visit_id: Scalars['String'];
};

export type ICreateSeatsInput = {
  seatInformation: Array<ISeatInformationInput>;
  studyCafe_id: Scalars['String'];
};

export type ICreateStudyCafeInput = {
  image: Array<ICreateImageInput>;
  studyCafe_address: Scalars['String'];
  studyCafe_addressDetail: Scalars['String'];
  studyCafe_brn: Scalars['String'];
  studyCafe_city: Scalars['String'];
  studyCafe_closeTime: Scalars['String'];
  studyCafe_contact: Scalars['String'];
  studyCafe_description: Scalars['String'];
  studyCafe_district: Scalars['String'];
  studyCafe_lat: Scalars['Float'];
  studyCafe_lon: Scalars['Float'];
  studyCafe_name: Scalars['String'];
  studyCafe_openTime: Scalars['String'];
  studyCafe_timeFee: Scalars['Int'];
};

export type ICreateUserInput = {
  user_email: Scalars['String'];
  user_name: Scalars['String'];
  user_password?: InputMaybe<Scalars['String']>;
  user_phone?: InputMaybe<Scalars['String']>;
};

export type IFetchAllStudyCafesInput = {
  page: Scalars['Int'];
  studyCafe_city: Scalars['String'];
  studyCafe_district: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  image_id: Scalars['String'];
  image_isMain: Scalars['Boolean'];
  image_url?: Maybe<Scalars['String']>;
  studyCafe: IStudyCafe;
};

export type ILoginAdministerInput = {
  administer_email: Scalars['String'];
  administer_password: Scalars['String'];
};

export type ILoginUserInput = {
  user_email: Scalars['String'];
  user_password: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  LoginAdminister: Scalars['String'];
  LoginUser: Scalars['String'];
  cancelLoginPointTransaction: Scalars['Boolean'];
  checkVerificationCode: Scalars['String'];
  createAdminister: IAdminister;
  createLoginCafeFloorPlanAndSeats: Scalars['Boolean'];
  createLoginPayment: ICreatePaymentObject;
  createLoginPointTransaction: Scalars['Boolean'];
  createLoginReview: Scalars['Boolean'];
  createLoginStudyCafe: IStudyCafe;
  createSeats: Scalars['Boolean'];
  createUser: IUser;
  deleteLoginAdminister: Scalars['Boolean'];
  deleteLoginReview: Scalars['Boolean'];
  deleteLoginStudyCafe: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  logoutAdminister: Scalars['String'];
  logoutUser: Scalars['String'];
  restoreAccessTokenForAdminister: Scalars['String'];
  restoreAccessTokenForUser: Scalars['String'];
  sendVerificationCode: Scalars['String'];
  updateLoginAdminister: IAdminister;
  updateLoginReview: Scalars['Boolean'];
  updateLoginStudyCafe: Scalars['Boolean'];
  updateLoginUser: Scalars['Boolean'];
  uploadImageFile: Array<Scalars['String']>;
};


export type IMutationLoginAdministerArgs = {
  loginAdministerInput: ILoginAdministerInput;
};


export type IMutationLoginUserArgs = {
  loginUserInput: ILoginUserInput;
};


export type IMutationCancelLoginPointTransactionArgs = {
  cancelPointTransactionInput: ICancelPointTransactionInput;
};


export type IMutationCheckVerificationCodeArgs = {
  verificationCode: Scalars['String'];
};


export type IMutationCreateAdministerArgs = {
  createAdministerInput: ICreateAdministerInput;
};


export type IMutationCreateLoginCafeFloorPlanAndSeatsArgs = {
  createCafeFloorPlanInput: ICreateCafeFloorPlanInput;
};


export type IMutationCreateLoginPaymentArgs = {
  createPaymentInput: ICreatePaymentInput;
};


export type IMutationCreateLoginPointTransactionArgs = {
  createPointTransactionInput: ICreatePointTransactionInput;
};


export type IMutationCreateLoginReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateLoginStudyCafeArgs = {
  createStudyCafeInput: ICreateStudyCafeInput;
};


export type IMutationCreateSeatsArgs = {
  createSeatsInput: ICreateSeatsInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteLoginReviewArgs = {
  cancelReviewInput: ICancelReviewInput;
};


export type IMutationDeleteLoginStudyCafeArgs = {
  studyCafe_id: Scalars['String'];
};


export type IMutationSendVerificationCodeArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateLoginAdministerArgs = {
  updateLoginAdministerInput: IUpdateLoginAdministerInput;
};


export type IMutationUpdateLoginReviewArgs = {
  updateReviewInput: IUpdateReviewInput;
};


export type IMutationUpdateLoginStudyCafeArgs = {
  updateStudyCafeInput: IUpdateStudyCafeInput;
};


export type IMutationUpdateLoginUserArgs = {
  updateLoginUserInput: IUpdateLoginUserInput;
};


export type IMutationUploadImageFileArgs = {
  images: Array<Scalars['Upload']>;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  payment_createdAt: Scalars['DateTime'];
  payment_id: Scalars['String'];
  payment_point: Scalars['Int'];
  payment_time: Scalars['Int'];
  seat: ISeat;
  user: IUser;
};

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  pointTransaction_amount: Scalars['Int'];
  pointTransaction_date: Scalars['DateTime'];
  pointTransaction_id: Scalars['String'];
  pointTransaction_impUid: Scalars['String'];
  pointTransaction_status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllLoginVisitByUserId: Array<IVisit>;
  fetchAllSeatsByStudyCafeId: Array<ISeat>;
  fetchAllStudyCafes: Array<IStudyCafe>;
  fetchAllStudyCafesByAdminId: Array<IStudyCafe>;
  fetchCafeMainImage: IImage;
  fetchLoginAdminister: IAdminister;
  fetchLoginPointTransactions: Array<IPointTransaction>;
  fetchLoginReviewByVisitId: IReview;
  fetchLoginReviewsByUserId: Array<IReview>;
  fetchLoginUser: IUser;
  fetchOneSeatsBySeatId: ISeat;
  fetchOneStudyCafeForAdminister: IStudyCafe;
  fetchOneStudyCafeForUser: IStudyCafe;
};


export type IQueryFetchAllLoginVisitByUserIdArgs = {
  page: Scalars['Int'];
};


export type IQueryFetchAllSeatsByStudyCafeIdArgs = {
  studyCafe_id: Scalars['String'];
};


export type IQueryFetchAllStudyCafesArgs = {
  fetchAllStudyCafesInput: IFetchAllStudyCafesInput;
};


export type IQueryFetchAllStudyCafesByAdminIdArgs = {
  administer_id: Scalars['String'];
};


export type IQueryFetchCafeMainImageArgs = {
  studyCafe_id: Scalars['String'];
};


export type IQueryFetchLoginReviewByVisitIdArgs = {
  visit_id: Scalars['String'];
};


export type IQueryFetchOneSeatsBySeatIdArgs = {
  seat_id: Scalars['String'];
};


export type IQueryFetchOneStudyCafeForAdministerArgs = {
  studyCafe_id: Scalars['String'];
};


export type IQueryFetchOneStudyCafeForUserArgs = {
  studyCafe_id: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  review_content?: Maybe<Scalars['String']>;
  review_createdAt?: Maybe<Scalars['DateTime']>;
  review_id?: Maybe<Scalars['String']>;
  studyCafe?: Maybe<IStudyCafe>;
  user?: Maybe<IUser>;
  visit?: Maybe<IVisit>;
};

export type ISeat = {
  __typename?: 'Seat';
  payment: Array<IPayment>;
  seat_expiredTime?: Maybe<Scalars['String']>;
  seat_id: Scalars['String'];
  seat_location: Scalars['String'];
  seat_number: Scalars['String'];
  seat_remainTime?: Maybe<Scalars['Int']>;
  studyCafe: IStudyCafe;
  user?: Maybe<IUser>;
  visit: Array<IVisit>;
};

export type ISeatInformationInput = {
  seat: Array<Array<Scalars['Int']>>;
  seat_number: Scalars['String'];
};

export type IStudyCafe = {
  __typename?: 'StudyCafe';
  administer: IAdminister;
  images: Array<IImage>;
  review: Array<IReview>;
  seats: Array<ISeat>;
  studyCafe_address: Scalars['String'];
  studyCafe_addressDetail: Scalars['String'];
  studyCafe_brn: Scalars['String'];
  studyCafe_city: Scalars['String'];
  studyCafe_closeTime: Scalars['String'];
  studyCafe_contact: Scalars['String'];
  studyCafe_description: Scalars['String'];
  studyCafe_district: Scalars['String'];
  studyCafe_floorPlanX: Scalars['Int'];
  studyCafe_floorPlanY: Scalars['Int'];
  studyCafe_id: Scalars['String'];
  studyCafe_inUseSeat?: Maybe<Scalars['Int']>;
  studyCafe_lat: Scalars['Float'];
  studyCafe_lon: Scalars['Float'];
  studyCafe_name: Scalars['String'];
  studyCafe_openTime: Scalars['String'];
  studyCafe_seatCount: Scalars['Int'];
  studyCafe_timeFee: Scalars['Int'];
  visit: IVisit;
};

export type IUpdateLoginAdministerInput = {
  administer_password: Scalars['String'];
  administer_phone: Scalars['String'];
};

export type IUpdateLoginUserInput = {
  user_image?: InputMaybe<Scalars['String']>;
  user_password: Scalars['String'];
  user_phone: Scalars['String'];
};

export type IUpdateReviewInput = {
  review_content: Scalars['String'];
  review_id: Scalars['String'];
};

export type IUpdateStudyCafeInput = {
  image?: InputMaybe<Array<ICreateImageInput>>;
  studyCafe_address?: InputMaybe<Scalars['String']>;
  studyCafe_addressDetail?: InputMaybe<Scalars['String']>;
  studyCafe_brn?: InputMaybe<Scalars['String']>;
  studyCafe_city?: InputMaybe<Scalars['String']>;
  studyCafe_closeTime?: InputMaybe<Scalars['String']>;
  studyCafe_contact?: InputMaybe<Scalars['String']>;
  studyCafe_description?: InputMaybe<Scalars['String']>;
  studyCafe_district?: InputMaybe<Scalars['String']>;
  studyCafe_id: Scalars['String'];
  studyCafe_lat?: InputMaybe<Scalars['Float']>;
  studyCafe_lon?: InputMaybe<Scalars['Float']>;
  studyCafe_name?: InputMaybe<Scalars['String']>;
  studyCafe_openTime?: InputMaybe<Scalars['String']>;
  studyCafe_timeFee?: InputMaybe<Scalars['Int']>;
};

export type IUser = {
  __typename?: 'User';
  seat: Array<ISeat>;
  user_deletedAt?: Maybe<Scalars['DateTime']>;
  user_email: Scalars['String'];
  user_id: Scalars['String'];
  user_image: Scalars['String'];
  user_name: Scalars['String'];
  user_phone: Scalars['String'];
  user_point: Scalars['Int'];
  visits: Array<IVisit>;
};

export type IVisit = {
  __typename?: 'Visit';
  review: IReview;
  seat: ISeat;
  studyCafe: IStudyCafe;
  user: IUser;
  visit_createdAt: Scalars['DateTime'];
  visit_id: Scalars['String'];
};
