import { gql, useQuery } from "@apollo/client";
import { ISeat } from "../../../../commons/types/generated/types";

interface IFetchAllSeatsQueryResult {
  refetch: () => Promise<void>;
  data?: {
    fetchAllSeatsByStudyCafeId: ISeat[];
  };
}

export const FETCH_ALL_SEATS = gql`
  query fetchAllSeatsByStudyCafeId($studyCafe_id: String!) {
    fetchAllSeatsByStudyCafeId(studyCafe_id: $studyCafe_id) {
      seat_id
      seat_number
      seat_location
      seat_expiredTime
      seat_remainTime
      user {
        user_id
        user_name
        # user_email
        # user_phone
        # user_point
        # user_image
      }
    }
  }
`;

export const useQueryFetchAllSeatsByStudyCafeId = (
  id: string
): IFetchAllSeatsQueryResult => {
  const query = useQuery(FETCH_ALL_SEATS, { variables: { studyCafe_id: id } });

  const refetch = async (): Promise<void> => {
    await query.refetch({ studyCafe_id: id });
  };

  return { ...query, refetch };
};
