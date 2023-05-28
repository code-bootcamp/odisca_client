import { useRouter } from "next/router";
import { useState } from "react";
import { PriceWithCommas } from "../../../../../commons/libraries/utils";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import PayModal from "../../mapScanner/mapScanner.PayModal";
import * as S from "./userMypageheader.styles";

export default function UserMyPageHeader(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchLoginUser();
  const [isPayModal, setIsPayModal] = useState(false);

  const onClickMoveEditMyPage = (): void => {
    void router.push("/user/mypage/edit");
  };
  const onClickPointBtn = (): void => {
    setIsPayModal(true);
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
              <S.PointBtn onClick={onClickPointBtn}>충전</S.PointBtn>
            </S.UserPointWrapper>
          </S.UserWrapperRight>
        </S.UserWrapper>
      </S.Wrapper>
      <PayModal
        isPayModal={isPayModal}
        setIsPayModal={setIsPayModal}
      ></PayModal>
    </>
  );
}
