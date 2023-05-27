// 타이틀 페이지
import { useRouter } from "next/router";
import * as S from "./UserDetailHeader.styles";

interface IPropsUserDetailHeader {
  cafeName: string | undefined;
  cafeBrn: string | undefined;
  cafeContact: string | undefined;
  cafeFee: number | undefined;
  cafeOpenTime: string;
  cafeClosTime: string;
}

export default function UserDetailHeader(
  props: IPropsUserDetailHeader
): JSX.Element {
  const router = useRouter();
  const onclickReservation = (): void => {
    void router.push("/user/" + String(router.query.Id) + "/mapScanner");
  };
  return (
    <S.Header>
      <S.Headerbox>
        <S.Title>{props.cafeName}</S.Title>
        <S.BtnBox onClick={onclickReservation}>
          <S.SeatBtn>좌석 예약하기</S.SeatBtn>
          <S.Icon src="/arrow.png" />
        </S.BtnBox>
      </S.Headerbox>
      <S.DevidedLine></S.DevidedLine>
      <S.InfoBox>
        <S.NumberBox>
          <S.Icon1 src="/phone.png" />
          <S.Number>{props.cafeContact}</S.Number>
        </S.NumberBox>
        <S.Slash> / </S.Slash>
        <S.PriceBox>
          <S.Icon src="/won.png" />
          <S.Price>1시간 당 {props.cafeFee}원</S.Price>
        </S.PriceBox>
        <S.Slash> / </S.Slash>
        <S.TimeBox>
          <S.Icon src="/clock.png" />
          <S.Price>
            {props.cafeOpenTime} ~ {props.cafeClosTime}
          </S.Price>
        </S.TimeBox>
      </S.InfoBox>
    </S.Header>
  );
}
