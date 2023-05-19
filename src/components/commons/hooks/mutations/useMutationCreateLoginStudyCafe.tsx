import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IStudyCafe,
} from "../../../../commons/types/generated/types";

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

export const useMutationCreateLoginStudyCafe = (): MutationTuple<
  Pick<IMutation, "createLoginStudyCafe">,
  IStudyCafe
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginStudyCafe">,
    IStudyCafe
  >(CREATE_LOGIN_STUDY_CAFE);

  return mutation;
};
