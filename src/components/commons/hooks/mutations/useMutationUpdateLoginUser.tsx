import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_LOGIN_USER = gql`
  mutation updateLoginUser($updateLoginUserInput: UpdateLoginUserInput!) {
    updateLoginUser(updateLoginUserInput: $updateLoginUserInput) {
      name
      email
      password
      phone
    }
  }
`;

export const useMutationUpdateLoginUser = (): MutationTuple<
  Pick<IMutation, "updateLoginUser">,
  IMutationUpdateLoginUserArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "updateLoginUser">,
    IMutationUpdateLoginUserArgs
  >(UPDATE_LOGIN_USER);
  return mutation;
};
