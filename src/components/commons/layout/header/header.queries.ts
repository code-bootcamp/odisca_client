import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION = gql`
  mutation createLoginPointTransaction(
    $createPointTransactionInput: CreatePointTransactionInput!
  ) {
    createLoginPointTransaction(
      createPointTransactionInput: $createPointTransactionInput
    ) {
      id
      status
      impUid
      amount
    }
  }
`;
