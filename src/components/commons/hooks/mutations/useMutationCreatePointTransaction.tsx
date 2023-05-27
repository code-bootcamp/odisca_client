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
