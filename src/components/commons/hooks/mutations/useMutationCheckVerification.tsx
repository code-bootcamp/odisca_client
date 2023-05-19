import { gql, useMutation } from "@apollo/client";

export const CHECK_VERIFICATION = gql`
  mutation checkVerificationCode($verificationCode: String!) {
    checkVerificationCode(verificationCode: $verificationCode)
  }
`;

export const useMutationCheckVerificationCode = () => {
  const mutation = useMutation(CHECK_VERIFICATION);
  return mutation;
};
