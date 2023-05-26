export interface IRsp {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string;
  merchant_uid: string;
  paid_amount: number;
}
