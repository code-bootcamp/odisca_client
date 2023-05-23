import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginPointTransactionArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_POINT_TRANSACTION = gql`
  mutation createLoginPointTransaction(
    $createPointTransactionInput: CreatePointTransactionInput!
  ) {
    createLoginPointTransaction(
      createPointTransactionInput: $createPointTransactionInput
    )
    # ) {
    #   pointTransaction_id
    #   # pointTransaction_impUid
    #   # pointTransaction_amount
    #   # pointTransaction_status
    #   # pointTransaction_date
    #   # user {
    #   #   visit
    #   # }
    # }
  }
`;
export const useMutationCreatePointTransaction = (): MutationTuple<
  Pick<IMutation, "createLoginPointTransaction">,
  IMutationCreateLoginPointTransactionArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginPointTransaction">,
    IMutationCreateLoginPointTransactionArgs
  >(CREATE_POINT_TRANSACTION);
  return mutation;
};
