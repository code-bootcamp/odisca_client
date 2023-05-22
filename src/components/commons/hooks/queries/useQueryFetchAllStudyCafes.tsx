import { gql, useQuery } from "@apollo/client";

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
      administer {
        administer_name
        administer_email
      }
      image_id
      # image_url
    }
  }
`;

export const useQueryFetchAllStudyCafes = () => {
  const query = useQuery(FETCH_ALL_STUDY_CAFES);
  const refetch = async (): Promise<void> => {
    await query.refetch();
  };

  return { ...query, refetch };
};
