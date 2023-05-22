import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateLoginStudyCafeArgs,
} from "../../../../commons/types/generated/types";

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

export const useMutationCreateLoginStudyCafe = (): MutationTuple<
  Pick<IMutation, "createLoginStudyCafe">,
  IMutationCreateLoginStudyCafeArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "createLoginStudyCafe">,
    IMutationCreateLoginStudyCafeArgs
  >(CREATE_LOGIN_STUDY_CAFE);

  return mutation;
};
