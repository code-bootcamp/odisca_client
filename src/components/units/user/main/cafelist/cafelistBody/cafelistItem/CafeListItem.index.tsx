import * as S from "./CafeListItem.styles";

export default function CafeListItem(props): JSX.Element {
  return (
    <S.Wrapper>
      <S.ListBox>
        <S.CafeBox>
          <S.CafeName>초심스터디카페</S.CafeName>
          <S.CafeList>
            <S.CafeImg src="" />
            <S.CafeInfo>
              <S.PriceImg src="/user/main/price.png" />
              <S.Price>1시간</S.Price>
              <S.Price>3,000원</S.Price>
            </S.CafeInfo>
            <S.CafeDetail>
              안녕하세요 5월에 오픈한 초심스터디 카페입니다.
            </S.CafeDetail>
            <S.CafeReview>
              여기 깔끔하고 집중 잘돼요. 백색소음 때문인가ㅎ
            </S.CafeReview>
          </S.CafeList>
        </S.CafeBox>
        <S.DevidedLine></S.DevidedLine>
      </S.ListBox>
    </S.Wrapper>
  );
}
