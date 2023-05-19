import { gql, useQuery } from "@apollo/client";

export const FETCH_ALL_SEATS = gql`
  query fetchAllSeatsByStudyCafeId($studyCafeId: String!) {
    fetchAllSeatsByStudyCafeId(studyCafeId: $studyCafeId) {
      id
      number
      location
    }
  }
`;

export const useQueryFetchAllSeatsByStudyCafeId = (id: string) => {
  const query = useQuery(FETCH_ALL_SEATS, { variables: { studyCafeId: id } });

  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
