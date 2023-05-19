import {
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

export const useMutationLogOut = (): MutationTuple<
  Pick<IMutation, "logout">,
  OperationVariables
> => {
  const mutation = useMutation<Pick<IMutation, "logout">>(LOG_OUT);

  return mutation;
};
