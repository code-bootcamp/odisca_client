import { gql, useMutation } from "@apollo/client";

export const CANCEL_LOGIN_POINT_TRANSACTION = gql`
  mutation cancelLoginPointTransaction(
    $cancelPointTransactionInput: CancelPointTransactionInput!
  ) {
    cancelLoginPointTransaction(
      cancelPointTransactionInput: $cancelPointTransactionInput
    ) {
      status
    }
  }
`;

export const useMutationCancelLoginPointTransaction = () => {
  const mutation = useMutation(CANCEL_LOGIN_POINT_TRANSACTION);
  return mutation;
};
