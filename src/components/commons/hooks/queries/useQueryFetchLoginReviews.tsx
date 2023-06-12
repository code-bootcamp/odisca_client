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
      visit {
        visit_id
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
