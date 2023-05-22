import { gql, useMutation } from "@apollo/client";

export const UPLOAD_IMAGE_FILE = gql`
  mutation uploadImageFile($images: Upload!) {
    uploadImageFile(images: $images)
  }
`;

export const useMutationUploadImageFile = () => {
  const mutation = useMutation(UPLOAD_IMAGE_FILE);
  return mutation;
};
