import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

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

function MyDropzone(): MyDropzoneReturn {
  const [imageDataArray, setImageDataArray] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
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

  const imageUrls = imageDataArray.map((imageData, index) =>
    URL.createObjectURL(new Blob([imageData]))
  );

  const previewImagesJsonString = JSON.stringify(imageUrls);

  return [
    getRootProps,
    getInputProps,
    isDragActive,
    previewImagesJsonString,
    imageUrls,
  ];
}
export default MyDropzone;
