import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCheckVerificationCodeArgs,
} from "../../../../commons/types/generated/types";

export const CHECK_VERIFICATION = gql`
  mutation checkVerificationCode($verificationCode: String!) {
    checkVerificationCode(verificationCode: $verificationCode)
  }
`;

export const useMutationCheckVerificationCode = (): MutationTuple<
  Pick<IMutation, "checkVerificationCode">,
  IMutationCheckVerificationCodeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "checkVerificationCode">,
    IMutationCheckVerificationCodeArgs
  >(CHECK_VERIFICATION);
  return mutation;
};
