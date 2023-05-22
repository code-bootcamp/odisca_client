import { gql, useMutation } from "@apollo/client";

export const UPDATE_LOGIN_STUDY_CAFE = gql`
  mutation updateLoginStudyCafe($updateStudyCafeInput: UpdateStudyCafeInput!) {
    updateLoginStudyCafe(updateStudyCafeInput: $updateStudyCafeInput) {
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
      administer {
        administer_name
      }
    }
  }
`;

export const useMutationUpdateLoginStudyCafe = () => {
  const mutation = useMutation(UPDATE_LOGIN_STUDY_CAFE);

  return mutation;
};
