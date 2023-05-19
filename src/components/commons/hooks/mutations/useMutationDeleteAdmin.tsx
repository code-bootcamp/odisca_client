import { useMutation, gql } from "@apollo/client";

export const DELETE_ADMIN = gql`
  mutation {
    deleteLoginAdminister
  }
`;

export const useMutationDeleteAdmin = () => {
  const mutation = useMutation(DELETE_ADMIN);
  return mutation;
};
