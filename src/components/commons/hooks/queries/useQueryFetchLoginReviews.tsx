import { gql, useQuery, QueryResult } from "@apollo/client";
import { IQuery, IVisit } from "../../../../commons/types/generated/types";

interface IFetchUserReviewQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchLoginReviewsByUserId">, IVisit>,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_REVIEW = gql`
  query {
    fetchLoginReviewsByUserId {
      review_id
      review_content
      review_createdAt
    }
  }
`;

export const useQueryFetchReview = (): IFetchUserReviewQueryResult => {
  const query = useQuery<Pick<IQuery, "fetchLoginReviewsByUserId">, IVisit>(
    FETCH_REVIEW
  );
  const refetchFetchReview = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch: refetchFetchReview };
};
