import { useState } from "react";
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

  return (
    <S.Wrapper>
      {/* 프로필 사진 */}
      <div>
        {/* <Uploads01
          key={uuidv4()}
          fileUrl={fileUrls}
          onChangeFileUrls={onChangeFileUrls}
        /> */}
        <S.ProfileImg src="" />
        <S.ProfileImgEdit src="/user/mypage/edit/camera.png" />
      </div>

      {/* 입력란 */}

      {/* 이름 입력란 */}
      <S.NonEditList>
        <S.ListDetail>이름</S.ListDetail>
        <S.DetailInput type="text" placeholder="홍길동" readOnly />
      </S.NonEditList>

      {/* 이메일 입력란 */}
      <S.NonEditList>
        <S.ListDetail>이메일</S.ListDetail>
        <S.DetailInput type="text" placeholder="usermail@gmail.com" readOnly />
      </S.NonEditList>

      {/* 비밀번호 입력란 */}
      <S.EditListBox>
        <S.EditList>
          <S.ListDetail>비밀번호</S.ListDetail>
          <S.DetailInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={props.register("password")}
          />
        </S.EditList>
        {/* 비밀번호 입력란 에러메세지 */}
        <S.AlertMessage>
          {props.formState.errors.password?.message}
        </S.AlertMessage>
      </S.EditListBox>

      {/* 전화번호 입력란 */}
      <S.EditListBox>
        <S.EditList>
          <S.ListDetail>전화번호</S.ListDetail>
          <S.DetailInput
            style={{ width: "585px" }}
            type="text"
            placeholder="010-1234-5678"
            register={props.register("phoneNumber")}
          />
          <S.PhoneNumAuthBtn>CLICK</S.PhoneNumAuthBtn>
        </S.EditList>
        {/* 전화번호 입력란 에러 메세지 */}
        <S.AlertMessage>
          {props.formState.errors.phoneNumber?.message}
        </S.AlertMessage>
      </S.EditListBox>
    </S.Wrapper>
  );
}
