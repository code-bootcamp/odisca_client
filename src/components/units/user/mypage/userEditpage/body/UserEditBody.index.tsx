import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { userEditSchema } from "../../../../../../commons/validations/validation";
import { useMutationUpdateLoginUser } from "../../../../../commons/hooks/mutations/useMutationUpdateLoginUser";
import { useQueryFetchLoginUser } from "../../../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./UserEditBody.styles";

interface IFormUpdateData {
  password: string;
  phoneNumber: string;
  email: string;
  name: string;
}

export default function UserEditBody(): JSX.Element {
  const [updateLoginUser] = useMutationUpdateLoginUser();
  const { data } = useQueryFetchLoginUser();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(userEditSchema),
    mode: "onChange",
  });

  console.log(formState);

  const onClickUserUpdate = async (data: IFormUpdateData) => {
    try {
      const result = await updateLoginUser({
        variables: {
          updateLoginUserInput: {
            password: data.password,
            phone: data.phoneNumber,
            name: data.name,
            email: data.email,
          },
        },
      });
      console.log(result);
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

  return (
    <S.Wrapper>
      <S.ProfileImgBox>
        <S.ProfileImg src="" />
        <S.ProfileImgEdit src="/user/mypage/edit/camera.png" />
      </S.ProfileImgBox>
      <S.InputForm>
        <S.EditList>
          <S.ListDetail>이름</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.name}
            readOnly
          />
        </S.EditList>
        <S.EditList>
          <S.ListDetail>이메일</S.ListDetail>
          <S.ReadOnlyDetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.email}
            readOnly
          />
        </S.EditList>
        <S.EditList>
          <S.ListDetail>비밀번호</S.ListDetail>
          <S.DetailInput
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요."
            {...register("password")}
          />
        </S.EditList>
        <S.AlertMessage></S.AlertMessage>
        <S.EditList>
          <S.ListDetail>전화번호</S.ListDetail>
          <S.DetailInput
            style={{ color: "#4f4f4f" }}
            type="text"
            defaultValue={data?.fetchLoginUser.phone}
            {...register("phoneNumber")}
          />
        </S.EditList>
        <S.AlertMessage>{formState.errors.phoneNumber?.message}</S.AlertMessage>
      </S.InputForm>
      <S.BtnWrapper onSubmit={wrapFormAsync(handleSubmit(onClickUserUpdate))}>
        <S.EditBtn>수정하기</S.EditBtn>
        <S.DleteUserBtn type="button">탈퇴하기</S.DleteUserBtn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
