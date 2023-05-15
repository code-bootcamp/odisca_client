import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { schema } from "../validation";
import * as S from "./UserEditBody.styles";
// import { v4 as uuidv4 } from "uuid";
// import Uploads01 from "../../../../../commons/uploads/01/Uploads01.container";

export default function UserEditBody(props): JSX.Element {
  // const [fileUrls, setFileUrls] = useState([""]);

  // const onChangeFileUrls = (fileUrl: string, index: number): void => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

  // 회원정보 입력란 react-hook-form 설정
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(formState);

  return (
    <S.Wrapper>
      {/* 프로필 사진 */}
      <S.ProfileImgBox>
        {/* <Uploads01
          key={uuidv4()}
          fileUrl={fileUrls}
          onChangeFileUrls={onChangeFileUrls}
        /> */}
        <S.ProfileImg src="" />
        <S.ProfileImgEdit src="/user/mypage/edit/camera.png" />
      </S.ProfileImgBox>

      {/* 입력란 */}

      <S.InputForm onSubmit={wrapFormAsync(handleSubmit(props.onClickSubmit))}>
        {/* 이름 입력란 */}
        <S.NonEditList>
          <S.ListDetail>이름</S.ListDetail>
          <S.DetailInput type="text" placeholder="홍길동" readOnly />
        </S.NonEditList>

        {/* 이메일 입력란 */}
        <S.NonEditList>
          <S.ListDetail>이메일</S.ListDetail>
          <S.DetailInput
            type="text"
            placeholder="usermail@gmail.com"
            readOnly
          />
        </S.NonEditList>

        {/* 비밀번호 입력란 */}
        <S.EditListBox>
          <S.EditList>
            <S.ListDetail>비밀번호</S.ListDetail>
            <S.DetailInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password")}
            />
          </S.EditList>
          {/* 비밀번호 입력란 에러메세지 */}
          <S.AlertMessage>{formState.errors.password?.message}</S.AlertMessage>
        </S.EditListBox>

        {/* 전화번호 입력란 */}
        <S.EditListBox>
          <S.EditList>
            <S.ListDetail>전화번호</S.ListDetail>
            <S.DetailInput
              style={{ width: "585px" }}
              type="text"
              placeholder="010-1234-5678"
              {...register("phoneNumber")}
            />
            <S.PhoneNumAuthBtn>CLICK</S.PhoneNumAuthBtn>
          </S.EditList>
          {/* 전화번호 입력란 에러 메세지 */}
          <S.AlertMessage>
            {formState.errors.phoneNumber?.message}
          </S.AlertMessage>
        </S.EditListBox>
      </S.InputForm>
    </S.Wrapper>
  );
}
