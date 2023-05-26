import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginPaymentArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_PAYMENT = gql`
  mutation createLoginPayment($createPaymentInput: CreatePaymentInput!) {
    createLoginPayment(createPaymentInput: $createPaymentInput) {
      payment {
        payment_id
        payment_point
      }
    }
  }
`;

export const useMutationCreatePayment = (): MutationTuple<
  Pick<IMutation, "createLoginPayment">,
  IMutationCreateLoginPaymentArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginPayment">,
    IMutationCreateLoginPaymentArgs
  >(CREATE_PAYMENT);
  return mutation;
};
