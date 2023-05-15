import * as S from "./adminPageheader.styles";

export default function AdiminPageHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.MyPageTitle>Admin Page</S.MyPageTitle>
        <S.AdminWrapper>
          <S.AdminWrapperLight>
            <S.ProfileWrapper>
              <S.ProfileImage></S.ProfileImage>
              <S.EditProfileIcon src="/editIcon.png"></S.EditProfileIcon>
            </S.ProfileWrapper>
          </S.AdminWrapperLight>
          <S.AdminWrapperRight>
            <S.AdminInfo>
              <S.AdminName>집게사장</S.AdminName>
              <S.AdminMail>adminmail@gmail.com</S.AdminMail>
            </S.AdminInfo>
            <S.RevenueWrapper>
              <S.RevenueText>이번달 매출</S.RevenueText>
              <S.Revenue>3000P</S.Revenue>
            </S.RevenueWrapper>
          </S.AdminWrapperRight>
        </S.AdminWrapper>
      </S.Wrapper>
    </>
  );
}
