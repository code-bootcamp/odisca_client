import { gql, useMutation } from "@apollo/client";

export const CREATE_LOGIN_STUDY_CAFE = gql`
  mutation createLoginStudyCafe($createStudyCafeInput: CreateStudyCafeInput!) {
    createLoginStudyCafe(createStudyCafeInput: $createStudyCafeInput) {
      id
      # name
      # address
      # addressDetail
      # city
      # district
      # contact
      # timeFee
      # description
      # openTime
      # closeTime
      # lat
      # lon
      # brn
      # administer {
      # id
      # name
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
