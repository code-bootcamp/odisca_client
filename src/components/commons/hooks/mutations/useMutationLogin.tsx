import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const USER_LOG_IN = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    LoginUser(loginUserInput: $loginUserInput)
  }
`;

export const useMutationUserLogin = () => {
  const mutation = useMutation<
    Pick<IMutation, "LoginUser">,
    IMutationLoginUserArgs
  >(USER_LOG_IN);
  return mutation;
};
