import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCafeMainImageArgs,
} from "../../../../commons/types/generated/types";

interface IFetchStudyCafeQueryResult {
  data?: Pick<IQuery, "fetchCafeMainImage">;
  refetch?: (
    variables?: Partial<IQueryFetchCafeMainImageArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchCafeMainImage">>>;
}

export const FETCH_CAFE_MAIN_IMAGE = gql`
  query fetchCafeMainImage($studyCafe_id: String!) {
    fetchCafeMainImage(studyCafe_id: $studyCafe_id) {
      image_url
    }
  }
`;

export const useQueryFetchCafeMainImage = (
  id: string
): IFetchStudyCafeQueryResult => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCafeMainImage">,
    { studyCafe_id: string }
  >(FETCH_CAFE_MAIN_IMAGE, {
    variables: { studyCafe_id: id },
  });
  return { data, refetch };
};
