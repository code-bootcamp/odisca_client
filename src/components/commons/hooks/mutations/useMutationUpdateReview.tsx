import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateLoginReviewArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_REVIEW = gql`
  mutation updateLoginReview($updateReviewInput: UpdateReviewInput!) {
    updateLoginReview(updateReviewInput: $updateReviewInput)
  }
`;

export const useMutationUpdateReview = (): MutationTuple<
  Pick<IMutation, "updateLoginReview">,
  IMutationUpdateLoginReviewArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "updateLoginReview">,
    IMutationUpdateLoginReviewArgs
  >(UPDATE_REVIEW);
  return mutation;
};
