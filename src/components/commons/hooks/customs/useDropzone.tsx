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

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFile(acceptedFiles[0] || null);
      if (acceptedFiles[0]) {
        const imageUrl = URL.createObjectURL(acceptedFiles[0]);
        setImageUrls([imageUrl]);
        onFileChange(acceptedFiles[0]);
      } else {
        setImageUrls([]);
        onFileChange(null);
      }
    },
    [setSelectedFile, setImageUrls, onFileChange]
  );
  console.log(setImageUrls, "여기 잘 ㄷㄹ?");

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrls([imageUrl]);
      onFileChange(selectedFile);
    } else if (data?.fetchLoginUser.user.user_image) {
      const imageUrl = `https://storage.googleapis.com/${data.fetchLoginUser.user.user_image}`;
      setImageUrls([imageUrl]);
    } else {
      setImageUrls([]);
      onFileChange(null);
    }
  }, [
    selectedFile,
    setImageUrls,
    onFileChange,
    data?.fetchLoginUser.user.user_image,
  ]);

  useEffect(() => {
    return () => {
      if (imageUrls.length > 0) {
        URL.revokeObjectURL(imageUrls[0]);
      }
    };
  }, [imageUrls]);

  console.log(data?.fetchLoginUser.user.user_image, "dd");
  console.log(imageUrls, "이미지유알엘스");

  return (
    <>
      <D.ProfileImgBox {...getRootProps()}>
        <input {...getInputProps()} />
        <D.ProfileImgEdit src="/user/mypage/edit/camera.png" />
        {selectedFile ? (
          <D.ProfileImg src={URL.createObjectURL(selectedFile)} />
        ) : data?.fetchLoginUser.user.user_image ? (
          <D.ProfileImg
            src={`https://storage.googleapis.com/${data.fetchLoginUser.user.user_image}`}
          />
        ) : (
          <D.ProfileImg src={imageUrls} />
        )}
        {/* <D.ProfileImg src={imageUrls[0]}></D.ProfileImg> */}
      </D.ProfileImgBox>
      {console.log(selectedFile, imageUrls, "ㅇㅇㅇㅇㅇ")}
    </>
  );
}
export default MyDropzone;
