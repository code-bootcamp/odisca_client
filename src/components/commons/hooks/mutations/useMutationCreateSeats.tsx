import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const CREATE_SEATS = gql`
  mutation createSeats($createSeatsInput: CreateSeatsInput!) {
    createSeats(createSeatsInput: $createSeatsInput) {
      id
      number
      location
      studyCafe {
        id
      }
      expiredTime
      user {
        id
      }
    }
  }
`;

export const useMutationCreateSeats = () => {
  const mutation = useMutation<Pick<IMutation, "createSeats">>(CREATE_SEATS);
  return mutation;
};
