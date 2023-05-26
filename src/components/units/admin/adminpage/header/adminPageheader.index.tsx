import * as S from "./adminPageheader.styles";

interface IAdminHeaderProps {
  adminName: string | undefined;
  adminMail: string | undefined;
  adminPoint: number | undefined;
}

export default function AdiminPageHeader(
  props: IAdminHeaderProps
): JSX.Element {
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
              <S.AdminName>{props.adminName}</S.AdminName>
              <S.AdminMail>{props.adminMail}</S.AdminMail>
            </S.AdminInfo>
            <S.RevenueWrapper>
              <S.RevenueText>이번달 매출</S.RevenueText>
              <S.Revenue>{props.adminPoint}P</S.Revenue>
            </S.RevenueWrapper>
          </S.AdminWrapperRight>
        </S.AdminWrapper>
      </S.Wrapper>
    </>
  );
}
