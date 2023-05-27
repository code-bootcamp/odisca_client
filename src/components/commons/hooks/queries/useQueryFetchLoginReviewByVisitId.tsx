import { gql, useQuery } from "@apollo/client";
import { IReview } from "../../../../commons/types/generated/types";

interface IFetchReviewByVisitId {
  refetch: () => Promise<void>;
  data?: {
    fetchLoginReviewByVisitId: IReview;
  };
}

export const FETCH_REVIEW_BY_VISIT_ID = gql`
  query fetchLoginReviewByVisitId($visit_id: String!) {
    fetchLoginReviewByVisitId(visit_id: $visit_id) {
      review_id
      review_content
      studyCafe {
        images {
          image_url
          image_isMain
        }
      }
      review_createdAt
      visit {
        seat {
          seat_number
        }
      }
    }
  }
`;

export const useQueryFetchLoginReviewByVisitId = (
  id: string
): IFetchReviewByVisitId => {
  const query = useQuery(FETCH_REVIEW_BY_VISIT_ID, {
    variables: { visit_id: id },
  });

  const refetch = async (): Promise<void> => {
    await query.refetch({ visit_id: id });
  };
  return { ...query, refetch };
};
