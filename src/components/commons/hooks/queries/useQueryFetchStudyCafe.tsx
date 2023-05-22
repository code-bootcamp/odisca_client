import { QueryResult, gql, useQuery } from "@apollo/client";
import { IQuery, IStudyCafe } from "../../../../commons/types/generated/types";

interface IFetchStudyCafeQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchStudyCafe">, IStudyCafe>,
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
    }
  }
`;

export const useQueryFetchOneStudyCafe = (
  id: string
): IFetchStudyCafeQueryResult => {
  const query = useQuery<PICK<isTypeQueryNode, "fetchStudyCafe">, IStudyCafe>(
    FETCH_ONE_STUDY_CAFE,
    { variables: { studyCafe_id: id } }
  );
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
