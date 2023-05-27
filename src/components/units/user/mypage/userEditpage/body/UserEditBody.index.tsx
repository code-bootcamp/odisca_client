import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
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
import { useRouter } from "next/router";

export default function UserEditBody(): JSX.Element {
  const router = useRouter();
  const [imageUrls] = useRecoilState(imageUrlsState);
  const [selectedFile] = useRecoilState(selectedFileState);
  const [updateLoginUser] = useMutationUpdateLoginUser();
  const { data, refetch: loginUserRefetch } = useQueryFetchLoginUser();
  const [uploadImageFile] = useMutationUploadImageFile();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(userEditSchema),
    mode: "onChange",
  });

  const onClickUserUpdate = async (data: FieldValues): Promise<void> => {
    try {
      if (imageUrls.length === 0) {
        return;
      }
      const ImageFile: File[] = [];
      for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        try {
          const file = await new Promise<File>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              if (ctx === null) {
                reject(new Error("Failed to create canvas context."));
                return;
              }
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              canvas.toBlob((blob) => {
                if (blob === null) {
                  reject(new Error("Failed to convert canvas to blob."));
                  return;
                }
                const file = new File(
                  [blob],
                  selectedFile?.name ?? "image.png"
                );
                resolve(file);
              });
            };
            img.onerror = () => {
              reject(new Error("Failed to load image."));
            };
            img.src = imageUrl;
          });

          ImageFile.push(file);
        } catch (error) {
          console.error(error);
        }
      }

      const results = await uploadImageFile({
        variables: { images: ImageFile },
      });
      const url = results.data?.uploadImageFile[0];

      await updateLoginUser({
        variables: {
          updateLoginUserInput: {
            user_password: String(data.user_password),
            user_phone: String(data.user_phone),
            user_image: String(url),
          },
        },
      });
      await loginUserRefetch();
      void router.push("/user/mypage");

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

  const onFileChange = useCallback((selectedFiles: File[] | null) => {
    if (selectedFiles === null) {
      console.log("No file selected.");
    } else {
      console.log(selectedFiles);
    }
  }, []);

  return (
    <S.Wrapper>
      <MyDropzone onFileChange={onFileChange} />
      <S.InputForm>
        <S.EditList>
          <S.ListDetail>이름</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.user_name}
            readOnly
          />
        </S.EditList>
        <S.EditList>
          <S.ListDetail>이메일</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.user_email}
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
            defaultValue={data?.fetchLoginUser.user_phone}
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
