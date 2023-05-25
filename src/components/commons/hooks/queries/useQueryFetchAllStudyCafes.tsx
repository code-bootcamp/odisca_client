import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  gql,
  useQuery,
} from "@apollo/client";
import {
  IFetchAllStudyCafesInput,
  IQuery,
  IQueryFetchAllStudyCafesArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchAllCafes {
  data?: Pick<IQuery, "fetchAllStudyCafes">;
  refetch?: (
    variables?: Partial<IQueryFetchAllStudyCafesArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchAllStudyCafes">>>;
  fetchMore: (
    fetchMoreOptions: FetchMoreQueryOptions<
      IQueryFetchAllStudyCafesArgs,
      Pick<IQuery, "fetchAllStudyCafes">
    > & {
      updateQuery?: (
        previousQueryResult: Pick<IQuery, "fetchAllStudyCafes">,
        options: {
          fetchMoreResult: Pick<IQuery, "fetchAllStudyCafes">;
          variables: IQueryFetchAllStudyCafesArgs;
        }
      ) => Pick<IQuery, "fetchAllStudyCafes">;
    }
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchAllStudyCafes">>>;
}

export const FETCH_ALL_STUDY_CAFES = gql`
  query fetchAllStudyCafes($fetchAllStudyCafesInput: FetchAllStudyCafesInput!) {
    fetchAllStudyCafes(fetchAllStudyCafesInput: $fetchAllStudyCafesInput) {
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
      studyCafe_lat
      studyCafe_lon
      studyCafe_brn
      studyCafe_seatCount
      studyCafe_floorPlanX
      studyCafe_floorPlanY
      images {
        image_id
        image_url
        image_isMain
      }
      review {
        review_content
      }
    }
  }
`;
export const useQueryFetchAllStudyCafes = (
  fetchAllStudyCafesInput: IFetchAllStudyCafesInput
): IUseQueryFetchAllCafes => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchAllStudyCafes">,
    IQueryFetchAllStudyCafesArgs
  >(FETCH_ALL_STUDY_CAFES, {
    variables: {
      fetchAllStudyCafesInput,
    },
  });
  return { data, refetch, fetchMore };
};
