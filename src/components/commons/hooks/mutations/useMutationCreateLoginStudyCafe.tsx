import { gql, useMutation } from "@apollo/client";

export const CREATE_LOGIN_STUDY_CAFE = gql`
  mutation createLoginStudyCafe($createStudyCafeInput: CreateStudyCafeInput!) {
    createLoginStudyCafe(createStudyCafeInput: $createStudyCafeInput) {
      id
      # name
      # address
      # contact
      # timeFee
      # description
      # openTime
      # closeTime
      # lat
      # lon
      # brn
      # seatCount
      # floorPlanX
      # floorPlanY
      # administer {
      # id
      # name
      # email
      # password
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
