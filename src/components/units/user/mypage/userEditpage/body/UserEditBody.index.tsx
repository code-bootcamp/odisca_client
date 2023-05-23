import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { userEditSchema } from "../../../../../../commons/validations/validation";
import MyDropzone from "../../../../../commons/hooks/customs/useDropzone";
import { useMutationUpdateLoginUser } from "../../../../../commons/hooks/mutations/useMutationUpdateLoginUser";
import { useQueryFetchLoginUser } from "../../../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./UserEditBody.styles";
import {
  imageUrlsState,
  selectedFileState,
} from "../../../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useMutationUploadImageFile } from "../../../../../commons/hooks/mutations/useMutationUploadImageFile";
import { useCallback } from "react";

interface IFormUpdateData {
  user_password: string;
  user_phone: string;
  user_image: string;
}

export default function UserEditBody(): JSX.Element {
  const [imageUrls] = useRecoilState(imageUrlsState);
  const [selectedFile] = useRecoilState(selectedFileState);
  const [updateLoginUser] = useMutationUpdateLoginUser();
  const { data } = useQueryFetchLoginUser();
  const [uploadImageFile] = useMutationUploadImageFile();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(userEditSchema),
    mode: "onChange",
  });

  const onClickUserUpdate = async (data: IFormUpdateData) => {
    try {
      if (imageUrls.length === 0) {
        return;
      }
      const previewImagesBase64 = await Promise.all(
        imageUrls.map((imageUrl) => {
          return new Promise<File>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              if (!ctx) {
                reject(new Error("Failed to create canvas context."));
                return;
              }
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              canvas.toBlob((blob) => {
                if (!blob) {
                  reject(new Error("Failed to convert canvas to blob."));
                  return;
                }
                const file = new File(
                  [blob],
                  selectedFile?.name || "image.png"
                );
                resolve(file);
              });
            };
            img.onerror = () => {
              reject(new Error("Failed to load image."));
            };
            img.src = imageUrl;
          });
        })
      );
      // const previewImagesJsonString1 = JSON.stringify(previewImagesBase64);
      // console.log(JSON.parse(previewImagesJsonString1), "이거뭐니");
      // const aaa = JSON.parse(previewImagesJsonString1);
      // console.log(previewImagesBase64, "ㅇㅇ??");
      // console.log(aaa, "ㄷ만");

      const results = await uploadImageFile({
        variables: { images: previewImagesBase64 },
      });

      console.log(results);
      const url = results.data?.uploadImageFile[0];

      const updateResult = await updateLoginUser({
        variables: {
          updateLoginUserInput: {
            user_password: data.user_password,
            user_phone: data.user_phone,
            user_image: url,
          },
        },
      });
      console.log(updateResult);

      Modal.success({
        content: "회원수정 완료!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  // const onFileChange = useCallback(
  //   (selectedFiles: File[]) => {
  //     console.log(selectedFiles);
  //     setSelectedFile(selectedFiles[0]);
  //     setImageUrls([URL.createObjectURL(selectedFiles[0])]);
  //   },
  //   [setImageUrls]
  // );

  // const onFileChange = useCallback(
  //   (selectedFiles: File[]) => {
  //     if (selectedFiles && selectedFiles.length > 0) {
  //       setSelectedFile(selectedFiles[0]);
  //       setImageUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
  //     } else {
  //       setSelectedFile(null);
  //       setImageUrls([]);
  //     }
  //   },
  //   [setSelectedFile, setImageUrls]
  // );

  const onFileChange = useCallback((selectedFiles: File[]) => {
    console.log(selectedFiles);
  }, []);

  return (
    <S.Wrapper>
      {/* <S.ProfileImgBox {...getRootProps()}> */}
      {/* <input {...getInputProps()} /> */}
      {/* <S.ProfileImg /> */}
      {/* <S.ProfileImgEdit src="/user/mypage/edit/camera.png" /> */}
      <MyDropzone onFileChange={onFileChange} />
      {/* </S.ProfileImgBox> */}
      <S.InputForm>
        <S.EditList>
          <S.ListDetail>이름</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.user.user_name}
            readOnly
          />
        </S.EditList>
        <S.EditList>
          <S.ListDetail>이메일</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.user.user_email}
            readOnly
          />
        </S.EditList>
        <S.EditList>
          <S.ListDetail>비밀번호</S.ListDetail>
          <S.DetailInput
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요."
            {...register("user_password")}
          />
        </S.EditList>
        <S.AlertMessage></S.AlertMessage>
        <S.EditList>
          <S.ListDetail>전화번호</S.ListDetail>
          <S.DetailInput
            style={{ color: "#4f4f4f" }}
            type="text"
            defaultValue={data?.fetchLoginUser.user.user_phone}
            {...register("user_phone")}
          />
        </S.EditList>
        <S.AlertMessage>{formState.errors.user_phone?.message}</S.AlertMessage>
      </S.InputForm>
      <S.BtnWrapper onSubmit={wrapFormAsync(handleSubmit(onClickUserUpdate))}>
        <S.EditBtn>수정하기</S.EditBtn>
        <S.DleteUserBtn type="button">탈퇴하기</S.DleteUserBtn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
