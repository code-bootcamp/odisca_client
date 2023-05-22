import { gql, useMutation } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createLoginPayment($createPaymentInput: CreatePaymentInput!) {
    createLoginPayment(createPaymentInput: $createPaymentInput) {
      payment_id
      payment_point
      payment_time
    }
  }
`;

export const useMutationCreatePayment = () => {
  const mutation = useMutation(CREATE_PAYMENT);
  return mutation;
};
