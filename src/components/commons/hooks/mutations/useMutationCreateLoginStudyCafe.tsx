import { gql, useMutation } from "@apollo/client";

export const CREATE_LOGIN_STUDY_CAFE = gql`
  mutation createLoginStudyCafe($createStudyCafeInput: CreateStudyCafeInput!) {
    createLoginStudyCafe(createStudyCafeInput: $createStudyCafeInput) {
      studyCafe_id
      # studyCafe_name
      # studyCafe_address
      # studyCafe_addressDetail
      # studyCafe_city
      # studyCafe_district
      # studyCafe_contact
      # studyCafe_timeFee
      # studyCafe_description
      # studyCafe_openTime
      # studyCafe_closeTime
      # studyCafe_lat
      # studyCafe_lon
      # studyCafe_brn
      # administer {
      # administer_id
      # administer_name
      # }
    }
  }
`;

export const useMutationCreateLoginStudyCafe = () => {
  const mutation = useMutation(
    // <
    //   Pick<IStudyCafe, "createLoginStudyCafe">,
    //   IMutation
    // >
    CREATE_LOGIN_STUDY_CAFE
  );

  return mutation;
};
