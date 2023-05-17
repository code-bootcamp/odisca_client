import { useRouter } from "next/router";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./userMypageheader.styles";

export default function UserMyPageHeader(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchLoginUser();

  const onClickMovePaymentList = (): void => {
    void router.push(`/user/mypage/transactionList`);
  };

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
              <S.UserName>{data?.fetchLoginUser.name}</S.UserName>
              <S.UserMail>{data?.fetchLoginUser.email}</S.UserMail>
            </S.UserInfo>
            <S.UserPointWrapper>
              <S.Icon src="/Vector (14).png"></S.Icon>
              <S.UserPoint>
                {data?.fetchLoginUser.point !== undefined
                  ? data?.fetchLoginUser.point
                  : "0"}
              </S.UserPoint>
              <S.PointBtn style={{ width: "48px" }}>충전</S.PointBtn>
              <S.PointBtn
                style={{ width: "77px" }}
                onClick={onClickMovePaymentList}
              >
                결제내역
              </S.PointBtn>
            </S.UserPointWrapper>
          </S.UserWrapperRight>
        </S.UserWrapper>
      </S.Wrapper>
    </>
  );
}
