import { useMutation, gql, MutationTuple } from "@apollo/client";
import { IMutation, Scalars } from "../../../../commons/types/generated/types";

export const DELETE_ADMIN = gql`
  mutation {
    deleteLoginAdminister
  }
`;

export const useMutationDeleteAdmin = (): MutationTuple<
  Pick<IMutation, "deleteLoginAdminister">,
  Scalars
> => {
  const mutation = useMutation<
    Pick<IMutation, "deleteLoginAdminister">,
    Scalars
  >(DELETE_ADMIN);
  return mutation;
};
