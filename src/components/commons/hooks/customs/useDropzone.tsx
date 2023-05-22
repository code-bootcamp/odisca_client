import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../../commons/stores";
import * as D from "../../../units/user/mypage/userEditpage/body/UserEditBody.styles";

interface MyDropzoneReturn {
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  isDragActive: boolean;
  previewImages: string;
}

interface DropzoneRootProps extends React.HTMLAttributes<HTMLElement> {
  refKey?: string;
  [key: string]: any;
}

export interface DropzoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  refKey?: string;
}

function MyDropzone(): JSX.Element {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);

  const [imageDataArray, setImageDataArray] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = reader.result;
        setImageDataArray((prevImageDataArray) => [
          ...prevImageDataArray,
          arrayBuffer,
        ]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // const imageUrls = imageDataArray.map((imageData, index) =>
  //   URL.createObjectURL(new Blob([imageData]))
  // );
  // setImageUrls(updatedImageUrls);

  useEffect(() => {
    const updatedImageUrls = imageDataArray.map((imageData, index) =>
      URL.createObjectURL(new Blob([imageData]))
    );

    // Recoil 상태 업데이트
    setImageUrls(updatedImageUrls);
  }, [imageDataArray, setImageUrls]);
  const previewImagesJsonString = JSON.stringify(imageUrls);

  console.log(previewImagesJsonString);

  // const myDropzoneReturn: MyDropzoneReturn = {
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   previewImages: previewImagesJsonString,
  //   imageUrls,
  // };

  // return [
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   previewImagesJsonString,
  //   imageUrls,
  // ];

  return (
    <>
      <D.ProfileImgBox {...getRootProps()}>
        <input {...getInputProps()} />
        <D.ProfileImgEdit src="/user/mypage/edit/camera.png" />
        <D.ProfileImg src={JSON.parse(previewImagesJsonString)}></D.ProfileImg>
      </D.ProfileImgBox>
      {/* <D.ProfileImg src={JSON.parse(previewImagesJsonString)}></D.ProfileImg> */}
    </>
  );
}
export default MyDropzone;
