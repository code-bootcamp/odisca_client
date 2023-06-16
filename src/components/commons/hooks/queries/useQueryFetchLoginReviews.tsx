import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import { IQuery, IReview } from "../../../../commons/types/generated/types";

interface IFetchUserReviewQueryResult {
  data?: Pick<IQuery, "fetchLoginReviewsByUserId">;
  refetch?: (
    variables?: Partial<IReview> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchLoginReviewsByUserId">>>;
}

export const FETCH_REVIEW = gql`
  query {
    fetchLoginReviewsByUserId {
      review_id
      review_content
      review_createdAt
      studyCafe {
        studyCafe_name
        images {
          image_url
          image_isMain
        }
      }
    }
  }
`;

export const useQueryFetchReview = (): IFetchUserReviewQueryResult => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchLoginReviewsByUserId">,
    IReview
  >(FETCH_REVIEW);
  return { data, refetch };
};
