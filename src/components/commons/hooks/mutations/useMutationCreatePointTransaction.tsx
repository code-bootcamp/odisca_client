import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_POINT_TRANSACTION = gql`
  mutation createLoginPointTransaction(
    $createPointTransactionInput: CreatePointTransactionInput!
  ) {
    createLoginPointTransaction(
      createPointTransactionInput: $createPointTransactionInput
    ) {
      # pointTransaction_id
      # pointTransaction_impUid
      # pointTransaction_amount
      # pointTransaction_status
      # pointTransaction_date
      user {
        visit
      }
    }
  }
`;

export const useMutationCreatePointTransaction = () => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginPointTransaction">,
    IMutationCreatePointTransactionArgs
  >(CREATE_POINT_TRANSACTION);
  return mutation;
};
