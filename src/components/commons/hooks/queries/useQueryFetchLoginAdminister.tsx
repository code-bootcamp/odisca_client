import { gql, useQuery, QueryResult } from "@apollo/client";
import { IAdminister, IQuery } from "../../../../commons/types/generated/types";

interface IFetchLoginAdministerQueryResult
  extends Omit<
    QueryResult<Pick<IQuery, "fetchLoginAdminister">, IAdminister>,
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

      studyCafes {
        studyCafe_id
        studyCafe_name
        studyCafe_address
        images {
          image_url
          image_isMain
        }
      }
    }
  }
`;

export const useQueryFetchLoginAdminister =
  (): IFetchLoginAdministerQueryResult => {
    const query = useQuery<Pick<IQuery, "fetchLoginAdminister">, IAdminister>(
      FETCH_LOGIN_ADMINISTER,
      { fetchPolicy: "network-only" }
    );
    const refetch = async (): Promise<void> => {
      await query.refetch();
    };

    return { ...query, refetch };
  };
