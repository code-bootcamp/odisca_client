import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCancelLoginPointTransactionArgs,
} from "../../../../commons/types/generated/types";

export const CANCEL_LOGIN_POINT_TRANSACTION = gql`
  mutation cancelLoginPointTransaction(
    $cancelPointTransactionInput: CancelPointTransactionInput!
  ) {
    cancelLoginPointTransaction(
      cancelPointTransactionInput: $cancelPointTransactionInput
    ) {
      pointTransaction_status
    }
  }
`;

export const useMutationCancelLoginPointTransaction = (): MutationTuple<
  Pick<IMutation, "cancelLoginPointTransaction">,
  IMutationCancelLoginPointTransactionArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "cancelLoginPointTransaction">,
    IMutationCancelLoginPointTransactionArgs
  >(CANCEL_LOGIN_POINT_TRANSACTION);
  return mutation;
};
