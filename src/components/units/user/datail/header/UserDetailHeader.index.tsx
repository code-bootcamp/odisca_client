// 타이틀 페이지
import * as S from "./UserDetailHeader.styles";

export default function UserDetailHeader(): JSX.Element {
  return (
    <S.Header>
      <S.Headerbox>
        <S.Title>어디스터디카페</S.Title>
        <S.BtnBox>
          <S.SeatBtn>좌석 예약하기</S.SeatBtn>
          <S.Icon src="/arrow.png" />
        </S.BtnBox>
      </S.Headerbox>
      <S.DevidedLine></S.DevidedLine>
    </S.Header>
  );
}
