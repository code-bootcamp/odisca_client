import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  // uploadfile mutation 정의 필요

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  // uploadfile mutation 필요
  //   const onChangeFile = async (
  //     event: ChangeEvent<HTMLInputElement>
  //   ): Promise<void> => {
  //     const file = event.target.files?.[0];
  //   };

  return (
    <Uploads01UI
      onClickUpload={onClickUpload}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      //   onChangeFile={onChangeFile}
    />
  );
}
