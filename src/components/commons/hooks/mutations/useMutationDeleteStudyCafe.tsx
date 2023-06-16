import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteLoginStudyCafeArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_LOGIN_STUDY_CAFE = gql`
  mutation deleteLoginStudyCafe($studyCafe_id: String!) {
    deleteLoginStudyCafe(studyCafe_id: $studyCafe_id)
  }
`;

export const useMutationDeleteStudyCafe = (): MutationTuple<
  Pick<IMutation, "deleteLoginStudyCafe">,
  IMutationDeleteLoginStudyCafeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "deleteLoginStudyCafe">,
    IMutationDeleteLoginStudyCafeArgs
  >(DELETE_LOGIN_STUDY_CAFE);
  return mutation;
};
