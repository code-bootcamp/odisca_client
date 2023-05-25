import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateLoginStudyCafeArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_LOGIN_STUDY_CAFE = gql`
  mutation updateLoginStudyCafe($updateStudyCafeInput: UpdateStudyCafeInput!) {
    updateLoginStudyCafe(updateStudyCafeInput: $updateStudyCafeInput)
  }
`;

export const useMutationUpdateLoginStudyCafe = (): MutationTuple<
  Pick<IMutation, "updateLoginStudyCafe">,
  IMutationUpdateLoginStudyCafeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "updateLoginStudyCafe">,
    IMutationUpdateLoginStudyCafeArgs
  >(UPDATE_LOGIN_STUDY_CAFE);

  return mutation;
};
