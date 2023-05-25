import { gql, useQuery, ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchOneStudyCafeForAdministerArgs,
} from "../../../../commons/types/generated/types";
interface IFetchStudyCafeQueryResult {
  data?: Pick<IQuery, "fetchOneStudyCafeForAdminister">;
  refetch?: (
    variables?: Partial<IQueryFetchOneStudyCafeForAdministerArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, "fetchOneStudyCafeForAdminister">>
  >;
}

export const FETCH_ONE_STUDY_CAFE_FOR_ADMIN = gql`
  query fetchOneStudyCafeForAdminister($studyCafe_id: String!) {
    fetchOneStudyCafeForAdminister(studyCafe_id: $studyCafe_id) {
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
      images {
        image_url
        image_isMain
      }
    }
  }
`;

export const useQueryFetchOneStudyCafeForAdmin = (
  id: string
): IFetchStudyCafeQueryResult => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchOneStudyCafeForAdminister">,
    IQueryFetchOneStudyCafeForAdministerArgs
  >(FETCH_ONE_STUDY_CAFE_FOR_ADMIN, {
    variables: { studyCafe_id: id },
  });

  return { data, refetch };
};
