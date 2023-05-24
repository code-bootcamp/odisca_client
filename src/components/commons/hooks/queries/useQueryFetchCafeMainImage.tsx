import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchCafeMainImageArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_CAFE_MAIN_IMAGE = gql`
  query fetchCafeMainImage($studyCafe_id: String!) {
    fetchCafeMainImage(studyCafe_id: $studyCafe_id) {
      image_url
    }
  }
`;

export const useQueryFetchCafeMainImage = (
  id: string
): IQueryFetchCafeMainImageArgs => {
  const query = useQuery<
    Pick<IQuery, "fetchCafeMainImage">,
    { studyCafe_id: string }
  >(FETCH_CAFE_MAIN_IMAGE, {
    variables: { studyCafe_id: id },
  });
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };
  return { ...query, refetch };
};
