import * as S from "./AdminDetailHeader.styles";

export default function AdminDetailHeader(): JSX.Element {
  return (
    <>
      <S.Header>
        <S.TitleBox>
          <S.Title>어디스터디카페</S.Title>
          <S.BusinessNumber>(000-000-000)</S.BusinessNumber>
        </S.TitleBox>
        <S.DevidedLine></S.DevidedLine>
        <S.InfoBox>
          <S.NumberBox>
            <S.Icon src="/phone.png" />
            <S.Number>02-1234-5678</S.Number>
          </S.NumberBox>
          <S.Slash> / </S.Slash>
          <S.PriceBox>
            <S.Icon src="/won.png" />
            <S.Price>1시간 당 4,000원</S.Price>
          </S.PriceBox>
          <S.Slash> / </S.Slash>
          <S.TimeBox>
            <S.Icon src="/clock.png" />
            <S.Price>매일 07:00 - 23:00</S.Price>
          </S.TimeBox>
        </S.InfoBox>
      </S.Header>
    </>
  );
}
