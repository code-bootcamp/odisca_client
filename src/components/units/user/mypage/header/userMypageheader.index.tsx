import { useRouter } from "next/router";
import { PriceWithCommas } from "../../../../../commons/libraries/utils";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./userMypageheader.styles";

export default function UserMyPageHeader(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchLoginUser();

  console.log(data);

  const onClickMovePaymentList = (): void => {
    void router.push(`/user/mypage/transactionList`);
  };

  const onClickMoveEditMyPage = (): void => {
    void router.push("/user/mypage/edit");
  };

  return (
    <>
      <S.Wrapper>
        <S.MyPageTitle>My Page</S.MyPageTitle>
        <S.UserWrapper>
          <S.UserWrapperLight>
            <S.ProfileWrapper>
              <S.ProfileImage
                src={data?.fetchLoginUser.user_image}
              ></S.ProfileImage>
            </S.ProfileWrapper>
          </S.UserWrapperLight>
          <S.UserWrapperRight>
            <S.UserInfo>
              <S.InfoWrapper>
                <S.UserName>{data?.fetchLoginUser.user_name}</S.UserName>
                <S.EditBtn onClick={onClickMoveEditMyPage}>정보수정</S.EditBtn>
              </S.InfoWrapper>
              <S.UserMail>{data?.fetchLoginUser.user_email}</S.UserMail>
            </S.UserInfo>
            <S.UserPointWrapper>
              <S.Icon src="/point.png"></S.Icon>
              <S.UserPoint>
                {PriceWithCommas(data?.fetchLoginUser.user_point ?? 0)}P
              </S.UserPoint>
              <S.PointBtn>충전</S.PointBtn>
              <S.PaymentBtn onClick={onClickMovePaymentList}>
                결제내역
              </S.PaymentBtn>
            </S.UserPointWrapper>
          </S.UserWrapperRight>
        </S.UserWrapper>
      </S.Wrapper>
    </>
  );
}
