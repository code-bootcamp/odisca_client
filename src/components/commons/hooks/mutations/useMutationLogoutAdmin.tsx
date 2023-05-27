import { gql, MutationTuple, useMutation } from "@apollo/client";
import { IMutation, Scalars } from "../../../../commons/types/generated/types";

export const LOG_OUT_ADMIN = gql`
  mutation logoutAdminister {
    logoutAdminister
  }
`;

export const useMutationLogOutAdmin = (): MutationTuple<
  Pick<IMutation, "logoutAdminister">,
  Scalars
> => {
  const mutation = useMutation<Pick<IMutation, "logoutAdminister">, Scalars>(
    LOG_OUT_ADMIN
  );

  return mutation;
};
