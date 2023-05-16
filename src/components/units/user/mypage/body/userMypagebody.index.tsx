import * as S from "./userMypagebody.styles";

export default function UserMyPageBody(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>예약내역</S.Title>
        <S.ReservationWrapper>
          <S.LeftWrapper>
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.SeatInfo>좌석 A16</S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>남은시간 30분</S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn>리뷰쓰기</S.Btn>
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
        <S.ReservationWrapper>
          <S.LeftWrapper>
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.SeatInfo>좌석 A16</S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>남은시간 30분</S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn>리뷰쓰기</S.Btn>
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
      </S.Wrapper>
    </>
  );
}
