// 타이틀 페이지
import { useRouter } from "next/router";
import * as S from "./UserDetailHeader.styles";

interface IPropsUserDetailHeader {
  cafeName: string | undefined;
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
          <S.SeatBtn>실시간 좌석 확인</S.SeatBtn>
          <S.Icon src="/arrow.png" />
        </S.BtnBox>
      </S.Headerbox>
      <S.DevidedLine></S.DevidedLine>
    </S.Header>
  );
}
