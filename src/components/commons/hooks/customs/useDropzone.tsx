import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState } from "recoil";
import { imageUrlsState, selectedFileState } from "../../../../commons/stores";
import * as D from "../../../units/user/mypage/userEditpage/body/UserEditBody.styles";
import { useQueryFetchLoginUser } from "../queries/useQueryFetchLoginUser";

interface MyDropzoneProps {
  onFileChange: (selectedFile: File | null) => void;
}
function MyDropzone({ onFileChange }: MyDropzoneProps): JSX.Element {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileState);
  const { data } = useQueryFetchLoginUser();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFile(acceptedFiles[0]);
    },
    [setSelectedFile]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  useEffect(() => {
    if (selectedFile !== null) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrls([imageUrl]);
      onFileChange(selectedFile);
    } else if (data?.fetchLoginUser.user_image !== undefined) {
      const imageUrl = data.fetchLoginUser.user_image;
      setImageUrls([imageUrl]);
    } else {
      setImageUrls([]);
      onFileChange(null);
    }
  }, [
    selectedFile,
    setImageUrls,
    onFileChange,
    data?.fetchLoginUser.user_image,
  ]);

  return (
    <>
      <D.ProfileImgBox {...getRootProps()}>
        <input {...getInputProps()} />
        <D.ProfileImgEdit src="/user/mypage/edit/camera.png" />
        <D.ProfileImg
          src={
            imageUrls[0] ??
            data?.fetchLoginUser.user_image ??
            "/ProfileIcon.png"
          }
        ></D.ProfileImg>
      </D.ProfileImgBox>
    </>
  );
}
export default MyDropzone;
