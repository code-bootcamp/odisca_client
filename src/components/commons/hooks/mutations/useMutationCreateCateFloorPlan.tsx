import { gql, useMutation } from "@apollo/client";

export const CREATE_LOGIN_CAFE_FLOOR_PLAN_AND_SEATS = gql`
  mutation createLoginCafeFloorPlanAndSeats(
    $createCateFloorPlanInput: CreateCafeFloorPlanInput!
  ) {
    createLoginCafeFloorPlanAndSeats(
      createCateFloorPlanInput: $createCateFloorPlanInput
    ) {
      studyCafe_id
      # studyCafe_name
    }
  }
`;

export const useMutationCreateLoginCafeFloorPlanAndSeats = () => {
  const mutation = useMutation(CREATE_LOGIN_CAFE_FLOOR_PLAN_AND_SEATS);
  return mutation;
};
