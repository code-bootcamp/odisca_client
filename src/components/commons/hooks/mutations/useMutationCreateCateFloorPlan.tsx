import { gql, MutationTuple, useMutation } from "@apollo/client";
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

export const useMutationCreateLoginCafeFloorPlanAndSeats = (): MutationTuple<
  Pick<IMutation, "createLoginCafeFloorPlanAndSeats">,
  IMutationCreateLoginCafeFloorPlanAndSeatsArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginCafeFloorPlanAndSeats">,
    IMutationCreateLoginCafeFloorPlanAndSeatsArgs
  >(CREATE_LOGIN_CAFE_FLOOR_PLAN_AND_SEATS);
  return mutation;
};
