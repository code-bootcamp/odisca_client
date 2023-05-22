import { gql, MutationTuple, useMutation } from "@apollo/client";
import { IMutation, Scalars } from "../../../../commons/types/generated/types";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

export const useMutationLogOut = (): MutationTuple<
  Pick<IMutation, "logout">,
  Scalars
> => {
  const mutation = useMutation<Pick<IMutation, "logout">, Scalars>(LOG_OUT);

  return mutation;
};
