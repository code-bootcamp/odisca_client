import { gql, useQuery } from "@apollo/client";

export const FETCH_ALL_SEATS = gql`
  query fetchAllSeatsByStudyCafeId($studyCafe_id: String!) {
    fetchAllSeatsByStudyCafeId(studyCafe_id: $studyCafe_id) {
      seat_id
      seat_number
      seat_location
      seat_expiredTime
      seat_remainTime
    }
  }
`;

export const useQueryFetchAllSeatsByStudyCafeId = (id: string) => {
  const query = useQuery(FETCH_ALL_SEATS, { variables: { studyCafe_id: id } });

  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
