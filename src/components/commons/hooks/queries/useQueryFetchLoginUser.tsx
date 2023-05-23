import { gql, useQuery, QueryResult } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";

interface IFetchLoginUserQueryResult
  extends Omit<QueryResult<Pick<IQuery, "fetchLoginUser">, IUser>, "refetch"> {
  refetch: () => Promise<void>;
}

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser(page: 1) {
      user {
        user_name
        user_email
        user_phone
        user_point
      }
    }
  }
`;

export const useQueryFetchLoginUser = (): IFetchLoginUserQueryResult => {
  const query = useQuery<Pick<IQuery, "fetchLoginUser">, IUser>(
    FETCH_LOGIN_USER
  );
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
