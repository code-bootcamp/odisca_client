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
  query fetchAllStudyCafesByAdminId($administer_id: String!) {
    fetchAllStudyCafesByAdminId(administer_id: $administer_id) {
      studyCafe_id
      studyCafe_name
      studyCafe_address
      studyCafe_contact
      studyCafe_timeFee
      studyCafe_description
    }
  }
`;

export const useQueryFetchLoginStudyCafes = (
  id: string
): IFetchLoginStudyCafeQueryResult => {
  const query = useQuery<Pick<IQuery, "fetchStudyCafes">, IStudyCafe>(
    FETCH_LOGIN_STUDY_CAFES,
    {
      variables: { administer_id: id },
    }
  );
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
