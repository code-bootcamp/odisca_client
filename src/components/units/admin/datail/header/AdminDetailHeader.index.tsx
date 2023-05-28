import * as S from "./AdminDetailHeader.styles";

interface IDetailHeaderProps {
  cafeName: string | undefined;
  cafeBrn: string | undefined;
  cafeContact: string | undefined;
  cafeFee: number | undefined;
  cafeOpenTime: string;
  cafeClosTime: string;
  cafeAddress: string | undefined;
  cafeAddressDetail: string | undefined;
}

export default function AdminDetailHeader(
  props: IDetailHeaderProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleBox>
          <S.Title>{props.cafeName}</S.Title>
          <S.BusinessNumber>({props.cafeBrn})</S.BusinessNumber>
        </S.TitleBox>
        <S.DevidedLine></S.DevidedLine>
        <S.InfoBox>
          <S.NumberBox>
            <S.Icon src="/phone.png" />
            <S.Number>{props.cafeContact}</S.Number>
            <S.Slash> / </S.Slash>
            <S.Number>{props.cafeAddress}</S.Number>
            <S.Number style={{ marginLeft: "10px" }}>
              {props.cafeAddressDetail}
            </S.Number>
          </S.NumberBox>
          <S.Slash> / </S.Slash>
          <S.PriceBox>
            <S.Icon src="/won.png" />
            <S.Price>1시간 당 {props.cafeFee}원</S.Price>
          </S.PriceBox>
          <S.Slash> / </S.Slash>
          <S.TimeBox>
            <S.Icon src="/clock.png" />
            <S.Price>{props.cafeOpenTime + "~" + props.cafeClosTime}</S.Price>
          </S.TimeBox>
        </S.InfoBox>
      </S.Header>
    </S.Wrapper>
  );
}
