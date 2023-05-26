import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginCafeFloorPlanAndSeatsArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_LOGIN_CAFE_FLOOR_PLAN_AND_SEATS = gql`
  mutation createLoginCafeFloorPlanAndSeats(
    $createCafeFloorPlanInput: CreateCafeFloorPlanInput!
  ) {
    createLoginCafeFloorPlanAndSeats(
      createCafeFloorPlanInput: $createCafeFloorPlanInput
    )
  }
`;

export const useMutationCreateLoginCafeFloorPlanAndSeats = (): [
  typeof createLoginCafeFloorPlanAndSeats
] => {
  const [createLoginCafeFloorPlanAndSeats] = useMutation<
    Pick<IMutation, "createLoginCafeFloorPlanAndSeats">,
    IMutationCreateLoginCafeFloorPlanAndSeatsArgs
  >(CREATE_LOGIN_CAFE_FLOOR_PLAN_AND_SEATS);
  return [createLoginCafeFloorPlanAndSeats];
};
