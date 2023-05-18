import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../../commons/types/generated/types";

export const ADMIN_LOG_IN = gql`
  mutation LoginAdminister($loginInput: LoginInput!) {
    LoginAdminister(loginInput: $loginInput)
  }
`;

export const useMutationAdminLogin = () => {
  const mutation = useMutation<Pick<IMutation, "Login">, IMutationLoginArgs>(
    ADMIN_LOG_IN
  );
  return mutation;
};
