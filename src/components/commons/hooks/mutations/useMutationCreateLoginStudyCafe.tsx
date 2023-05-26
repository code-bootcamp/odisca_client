import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginStudyCafeArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_LOGIN_STUDY_CAFE = gql`
  mutation createLoginStudyCafe($createStudyCafeInput: CreateStudyCafeInput!) {
    createLoginStudyCafe(createStudyCafeInput: $createStudyCafeInput) {
      studyCafe_id
    }
  }
`;

export const useMutationCreateLoginStudyCafe = (): MutationTuple<
  Pick<IMutation, "createLoginStudyCafe">,
  IMutationCreateLoginStudyCafeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginStudyCafe">,
    IMutationCreateLoginStudyCafeArgs
  >(CREATE_LOGIN_STUDY_CAFE);

  return mutation;
};
