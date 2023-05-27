import { gql, MutationTuple, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadImageFileArgs,
} from "../../../../commons/types/generated/types";

export const UPLOAD_IMAGE_FILE = gql`
  mutation uploadImageFile($images: [Upload!]!) {
    uploadImageFile(images: $images)
  }
`;

export const useMutationUploadImageFile = (): MutationTuple<
  Pick<IMutation, "uploadImageFile">,
  IMutationUploadImageFileArgs
> => {
  const mutation = useMutation<
    Pick<IMutation, "uploadImageFile">,
    IMutationUploadImageFileArgs
  >(UPLOAD_IMAGE_FILE);
  return mutation;
};
