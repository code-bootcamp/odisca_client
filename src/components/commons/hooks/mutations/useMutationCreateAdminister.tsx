import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateAdministerArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_ADMINISTER = gql`
  mutation createAdminister($createAdministerInput: CreateAdministerInput!) {
    createAdminister(createAdministerInput: $createAdministerInput) {
      administer_id
    }
  }
`;

export const useMutationCreateAdminister = () => {
  const mutation = useMutation<
    Pick<IMutation, "createAdminister">,
    IMutationCreateAdministerArgs
  >(CREATE_ADMINISTER);
  return mutation;
};
