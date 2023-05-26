import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginAdministerArgs,
} from "../../../../commons/types/generated/types";

export const ADMIN_LOG_IN = gql`
  mutation LoginAdminister($loginAdministerInput: LoginAdministerInput!) {
    LoginAdminister(loginAdministerInput: $loginAdministerInput)
  }
`;

export const useMutationAdminLogin = (): [typeof LoginAdminister] => {
  const [LoginAdminister] = useMutation<
    Pick<IMutation, "LoginAdminister">,
    IMutationLoginAdministerArgs
  >(ADMIN_LOG_IN);
  return [LoginAdminister];
};
