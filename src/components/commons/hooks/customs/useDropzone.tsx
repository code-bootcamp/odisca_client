import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState } from "recoil";
import { imageUrlsState, selectedFileState } from "../../../../commons/stores";
import * as D from "../../../units/user/mypage/userEditpage/body/UserEditBody.styles";
import { useQueryFetchLoginUser } from "../queries/useQueryFetchLoginUser";

interface MyDropzoneProps {
  onFileChange: (selectedFile: File) => void;
}

function MyDropzone({ onFileChange }: MyDropzoneProps): JSX.Element {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileState);
  const { data } = useQueryFetchLoginUser();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0] || null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrls([imageUrl]);
      onFileChange(selectedFile);
    } else {
      setImageUrls([]);
      onFileChange(null);
    }
  }, [selectedFile, setImageUrls, onFileChange]);

  useEffect(() => {
    return () => {
      if (imageUrls.length > 0) {
        URL.revokeObjectURL(imageUrls[0]);
      }
    };
  }, [imageUrls]);
  console.log(data?.fetchLoginUser.user.user_image, "dd");

  return (
    <>
      <D.ProfileImgBox {...getRootProps()}>
        <input {...getInputProps()} />
        <D.ProfileImgEdit src="/user/mypage/edit/camera.png" />
        {data?.fetchLoginUser.user.user_image ? (
          <D.ProfileImg
            src={`https://storage.googleapis.com/${data.fetchLoginUser.user.user_image}`}
          ></D.ProfileImg>
        ) : (
          <D.ProfileImg src={imageUrls[0]}></D.ProfileImg>
        )}
        {/* <D.ProfileImg src={imageUrls[0]}></D.ProfileImg> */}
      </D.ProfileImgBox>
    </>
  );
}
export default MyDropzone;
