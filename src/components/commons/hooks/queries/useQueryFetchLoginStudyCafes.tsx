import { QueryResult, gql, useQuery } from "@apollo/client";
import { IQuery, IStudyCafe } from "../../../../commons/types/generated/types";

interface IFetchLoginStudyCafeQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchStudyCafes">, IStudyCafe>,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_LOGIN_STUDY_CAFES = gql`
  query {
    fetchLoginStudyCafes {
      id
      name
      address
      contact
      timeFee
      description
      operatingTime
    }
  }
`;

export const useQueryFetchLoginStudyCafes =
  (): IFetchLoginStudyCafeQueryResult => {
    const query = useQuery<Pick<IQuery, "fetchStudyCafes">, IStudyCafe>(
      FETCH_LOGIN_STUDY_CAFES
    );
    const refetch = async (): Promise<void> => {
      await query.refetch();
    };

    return { ...query, refetch };
  };
