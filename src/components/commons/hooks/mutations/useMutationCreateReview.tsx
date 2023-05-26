import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginReviewArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_REVIEW = gql`
  mutation createLoginReview($createReviewInput: CreateReviewInput!) {
    createLoginReview(createReviewInput: $createReviewInput)
  }
`;

export const useMutationCreateReview = (): MutationTuple<
  Pick<IMutation, "createLoginReview">,
  IMutationCreateLoginReviewArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginReview">,
    IMutationCreateLoginReviewArgs
  >(CREATE_REVIEW);
  return mutation;
};
