import { gql, MutationTuple, useMutation } from "@apollo/client";
import { IMutation, Scalars } from "../../../../commons/types/generated/types";

export const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLogOutUser = (): MutationTuple<
  Pick<IMutation, "logoutUser">,
  Scalars
> => {
  const mutation = useMutation<Pick<IMutation, "logoutUser">, Scalars>(
    LOG_OUT_USER
  );

  return mutation;
};
