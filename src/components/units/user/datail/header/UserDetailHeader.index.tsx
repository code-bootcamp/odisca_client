// 타이틀 페이지
import { useRouter } from "next/router";
import * as S from "./UserDetailHeader.styles";

interface IPropsUserDetailHeader {
  cafeName: string;
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
    </S.Header>
  );
}
