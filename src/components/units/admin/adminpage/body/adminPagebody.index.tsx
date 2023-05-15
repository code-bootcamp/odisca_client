import * as S from "./adminPagebody.styles";

export default function AdminPageBody(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>My Cafes</S.Title>
        <S.MyCafeWrapper>
          <S.LeftWrapper>
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.Remark>24시간, 주차무료 간식 많아요 ..remarks</S.Remark>
            </S.Top>
            <S.Bottom>
              <S.OccupiedSeat>이용중인 좌석 30석</S.OccupiedSeat>
              <S.MoveToSeatBtn>확인하기</S.MoveToSeatBtn>
            </S.Bottom>
          </S.RightWrapper>
        </S.MyCafeWrapper>
        <S.MyCafeWrapper>
          <S.LeftWrapper>
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.Remark>24시간, 주차무료 간식 많아요 ..remarks</S.Remark>
            </S.Top>
            <S.Bottom>
              <S.OccupiedSeat>이용중인 좌석 30석</S.OccupiedSeat>
              <S.MoveToSeatBtn>확인하기</S.MoveToSeatBtn>
            </S.Bottom>
          </S.RightWrapper>
        </S.MyCafeWrapper>
        <S.CreateSeatingChart>좌석배치도 등록하기</S.CreateSeatingChart>
      </S.Wrapper>
    </>
  );
}
