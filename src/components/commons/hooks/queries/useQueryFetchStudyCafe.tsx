import { QueryResult, gql, useQuery } from "@apollo/client";
import { IQuery, IStudyCafe } from "../../../../commons/types/generated/types";

interface IFetchStudyCafeQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchStudyCafe">, IStudyCafe>,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_STUDY_CAFE = gql`
  query fetchStudyCafe($studyCafeId: String!) {
    fetchStudyCafe(studyCafeId: $studyCafeId) {
      name
      address
      contact
      timeFee
      description
      brn
      openTime
      closeTime
    }
  }
`;

export const useQueryFetchStudyCafes = (
  id: string
): IFetchStudyCafeQueryResult => {
  const query = useQuery<PICK<isTypeQueryNode, "fetchStudyCafe">, IStudyCafe>(
    FETCH_STUDY_CAFE,
    { variables: { studyCafeId: id } }
  );
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
