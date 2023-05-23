import { QueryResult, gql, useQuery } from "@apollo/client";
import { IStudyCafe } from "../../../../commons/types/generated/types";

interface IFetchStudyCafeQueryResult
  extends Omit<
    QueryResult<{ fetchOneStudyCafe: IStudyCafe }, { studyCafe_id: string }>,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_ONE_STUDY_CAFE = gql`
  query fetchOneStudyCafe($studyCafe_id: String!) {
    fetchOneStudyCafe(studyCafe_id: $studyCafe_id) {
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
      studyCafe_seatCount
      studyCafe_floorPlanX
      studyCafe_floorPlanY
      administer {
        administer_name
        administer_email
      }
      images {
        image_url
        image_isMain
      }
    }
  }
`;

export const useQueryFetchOneStudyCafe = (
  id: string
): IFetchStudyCafeQueryResult => {
  const query = useQuery<
    { fetchOneStudyCafe: IStudyCafe },
    { studyCafe_id: string }
  >(FETCH_ONE_STUDY_CAFE, {
    variables: { studyCafe_id: id },
  });

  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
