import { QueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchOneStudyCafeForUserArgs,
  IStudyCafe,
} from "../../../../commons/types/generated/types";

interface IFetchStudyCafeQueryResult
  extends Omit<
    QueryResult<
      { fetchOneStudyCafeForUser: IStudyCafe },
      { studyCafe_id: string }
    >,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_ONE_STUDY_CAFE_FOR_USER = gql`
  query fetchOneStudyCafeForUser($studyCafe_id: String!) {
    fetchOneStudyCafeForUser(studyCafe_id: $studyCafe_id) {
      studyCafe_id
      studyCafe_name
      studyCafe_address
      studyCafe_addressDetail
      studyCafe_city
      studyCafe_district
      studyCafe_contact
      studyCafe_timeFee
      studyCafe_description
      studyCafe_openTime
      studyCafe_closeTime
      studyCafe_brn
      studyCafe_lat
      studyCafe_lon
      studyCafe_seatCount
      studyCafe_floorPlanX
      studyCafe_floorPlanY
      images {
        image_url
        image_isMain
      }
      review {
        user {
          user_name
          user_image
        }
        review_content
        review_id
      }
    }
  }
`;

export const useQueryFetchOneStudyCafeForUser = (
  id: string
): IFetchStudyCafeQueryResult => {
  const query = useQuery<
    Pick<IQuery, "fetchOneStudyCafeForUser">,
    IQueryFetchOneStudyCafeForUserArgs
  >(FETCH_ONE_STUDY_CAFE_FOR_USER, {
    variables: { studyCafe_id: id },
  });

  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
