import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const USER_LOG_IN = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    LoginUser(loginUserInput: $loginUserInput)
  }
`;

export const useMutationUserLogin = (): MutationTuple<
  Pick<IMutation, "LoginUser">,
  IMutationLoginUserArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "LoginUser">,
    IMutationLoginUserArgs
  >(USER_LOG_IN);
  return mutation;
};
