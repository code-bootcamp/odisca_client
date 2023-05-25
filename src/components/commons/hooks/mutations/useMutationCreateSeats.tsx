import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateSeatsArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_SEATS = gql`
  mutation createSeats($createSeatsInput: CreateSeatsInput!) {
    createSeats(createSeatsInput: $createSeatsInput)
  }
`;

export const useMutationCreateSeats = (): [typeof createSeats] => {
  const [createSeats] = useMutation<
    Pick<IMutation, "createSeats">,
    IMutationCreateSeatsArgs
  >(CREATE_SEATS);
  return [createSeats];
};
