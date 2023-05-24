import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteLoginReviewArgs,
} from "../../../../commons/types/generated/types";

export const DELETE_REVIEW = gql`
  mutation deleteLoginReview($cancelReviewInput: CancelReviewInput!) {
    deleteLoginReview(cancelReviewInput: $cancelReviewInput)
  }
`;

export const useMutationDeleteReview = (): MutationTuple<
  Pick<IMutation, "deleteLoginReview">,
  IMutationDeleteLoginReviewArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "deleteLoginReview">,
    IMutationDeleteLoginReviewArgs
  >(DELETE_REVIEW);
  return mutation;
};
