import { gql, useMutation } from "@apollo/client";

export const SEND_VERIFICATION = gql`
  mutation sendVerificationCode($email: String!) {
    sendVerificationCode(email: $email)
  }
`;

export const useMutationSendVerificationCode = () => {
  const mutation = useMutation(SEND_VERIFICATION);
  return mutation;
};
