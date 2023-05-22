import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationSendVerificationCodeArgs,
} from "../../../../commons/types/generated/types";

export const SEND_VERIFICATION = gql`
  mutation sendVerificationCode($email: String!) {
    sendVerificationCode(email: $email)
  }
`;

export const useMutationSendVerificationCode = (): MutationTuple<
  Pick<IMutation, "sendVerificationCode">,
  IMutationSendVerificationCodeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "sendVerificationCode">,
    IMutationSendVerificationCodeArgs
  >(SEND_VERIFICATION);
  return mutation;
};
