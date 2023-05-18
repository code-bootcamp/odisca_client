import { useQueryFetchLoginAdminister } from "../../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import * as S from "./adminPageheader.styles";

export default function AdiminPageHeader(): JSX.Element {
  const { data } = useQueryFetchLoginAdminister();
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
              <S.AdminName>{data?.fetchLoginAdminister.name}</S.AdminName>
              <S.AdminMail>{data?.fetchLoginAdminister.email}</S.AdminMail>
            </S.AdminInfo>
            <S.RevenueWrapper>
              <S.RevenueText>이번달 매출</S.RevenueText>
              <S.Revenue>{data?.fetchLoginAdminister.point}</S.Revenue>
            </S.RevenueWrapper>
          </S.AdminWrapperRight>
        </S.AdminWrapper>
      </S.Wrapper>
    </>
  );
}
