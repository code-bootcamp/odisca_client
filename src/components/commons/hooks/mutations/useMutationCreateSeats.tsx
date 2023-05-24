import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateSeatsArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_SEATS = gql`
  mutation createSeats($createSeatsInput: CreateSeatsInput!) {
    createSeats(createSeatsInput: $createSeatsInput)
  }
`;

export const useMutationCreateSeats = (): MutationTuple<
  Pick<IMutation, "createSeats">,
  IMutationCreateSeatsArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createSeats">,
    IMutationCreateSeatsArgs
  >(CREATE_SEATS);
  return mutation;
};
