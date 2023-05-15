import * as S from "./userMypageheader.styles";

export default function UserMyPageHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.MyPageTitle>My Page</S.MyPageTitle>
        <S.UserWrapper>
          <S.UserWrapperLight>
            <S.ProfileWrapper>
              <S.ProfileImage></S.ProfileImage>
              <S.EditProfileIcon src="/editIcon.png"></S.EditProfileIcon>
            </S.ProfileWrapper>
          </S.UserWrapperLight>
          <S.UserWrapperRight>
            <S.UserInfo>
              <S.UserName>userName</S.UserName>
              <S.UserMail>user@mail.com</S.UserMail>
            </S.UserInfo>
            <S.UserPointWrapper>
              <S.Icon src="/Vector (14).png"></S.Icon>
              <S.UserPoint>3000P</S.UserPoint>
              <S.ChargeBtn>충전</S.ChargeBtn>
            </S.UserPointWrapper>
          </S.UserWrapperRight>
        </S.UserWrapper>
      </S.Wrapper>
    </>
  );
}
