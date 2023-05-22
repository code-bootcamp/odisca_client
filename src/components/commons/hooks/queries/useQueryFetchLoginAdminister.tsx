import { gql, useQuery, QueryResult } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";

interface IFetchLoginUserQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchLoginAdminister">, IUser>,
    "refetch"
  > {
  refetch: () => Promise<void>;
}

export const FETCH_LOGIN_ADMINISTER = gql`
  query {
    fetchLoginAdminister {
      administer_id
      administer_name
      administer_email
      administer_phone
      administer_point
    }
  }
`;

export const useQueryFetchLoginAdminister = (): IFetchLoginUserQueryResult => {
  const query = useQuery<Pick<IQuery, "fetchLoginAdminister">, IUser>(
    FETCH_LOGIN_ADMINISTER
  );
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
