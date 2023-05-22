import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginAdministerArgs,
} from "../../../../commons/types/generated/types";

export const ADMIN_LOG_IN = gql`
  mutation LoginAdminister($loginAdministerInput: LoginAdministerInput!) {
    LoginAdminister(loginAdministerInput: $loginAdministerInput)
  }
`;

export const useMutationAdminLogin = (): MutationTuple<
  Pick<IMutation, "LoginAdminister">,
  IMutationLoginAdministerArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "LoginAdminister">,
    IMutationLoginAdministerArgs
  >(ADMIN_LOG_IN);
  return mutation;
};
