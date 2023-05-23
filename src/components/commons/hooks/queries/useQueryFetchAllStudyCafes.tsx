// import { gql, useQuery } from "@apollo/client";
// import {
//   IQueryFetchAllStudyCafesArgs,
//   IStudyCafesWithImages,
// } from "../../../../commons/types/generated/types";

// export const FETCH_ALL_STUDY_CAFES = gql`
//   query fetchAllStudyCafes($fetchAllStudyCafesInput: FetchAllStudyCafesInput!) {
//     fetchAllStudyCafes(fetchAllStudyCafesInput: $fetchAllStudyCafesInput) {
//       studyCafe_id
//       studyCafe_name
//       studyCafe_address
//       studyCafe_addressDetail
//       studyCafe_city
//       studyCafe_district
//       studyCafe_contact
//       studyCafe_timeFee
//       studyCafe_description
//       studyCafe_openTime
//       studyCafe_closeTime
//       studyCafe_lat
//       studyCafe_lon
//       studyCafe_brn
//       studyCafe_seatCount
//       studyCafe_floorPlanX
//       studyCafe_floorPlanY
//       image_id
//       image_url
//     }
//   }
// `;
// export const useQueryFetchAllStudyCafes = (
//   fetchAllStudyCafesInput: IQueryFetchAllStudyCafesArgs
// ): {
//   data: IStudyCafesWithImages;
//   refetch: () => Promise<void>;
//   fetchMore: (variables: { page: number }) => Promise<void>;
// } => {
//   const query = useQuery(FETCH_ALL_STUDY_CAFES, {
//     variables: {
//       fetchAllStudyCafesInput,
//     },
//   });
//   const refetch = async (): Promise<void> => {
//     await query.refetch();
//   };
//   const fetchMore = async (variables: { page: number }): Promise<void> => {
//     await query.fetchMore({ variables });
//   };

//   return { data: query.data, refetch, fetchMore };
// };
import { gql, useQuery } from "@apollo/client";
import {
  IFetchAllStudyCafesInput,
  IQuery,
  IQueryFetchAllStudyCafesArgs,
  IStudyCafesWithImages,
} from "../../../../commons/types/generated/types";

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
      }
    }
  }
`;
export const useQueryFetchAllStudyCafes = (
  fetchAllStudyCafesInput: IFetchAllStudyCafesInput
): {
  data: IStudyCafesWithImages;
  refetch: () => Promise<void>;
  fetchMore: (variables: { page: number }) => Promise<void>;
} => {
  const query = useQuery<
    Pick<IQuery, "fetchAllStudyCafes">,
    IQueryFetchAllStudyCafesArgs
  >(FETCH_ALL_STUDY_CAFES, {
    variables: {
      fetchAllStudyCafesInput,
    },
  });
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };
  const fetchMore = async (variables: { page: number }): Promise<void> => {
    await query.fetchMore({ variables });
  };

  return { data: query.data, refetch, fetchMore };
};
