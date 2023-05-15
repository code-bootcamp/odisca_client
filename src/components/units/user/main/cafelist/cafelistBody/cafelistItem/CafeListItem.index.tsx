import * as S from "./CafeListItem.styles";

export default function CafeListItem(props): JSX.Element {
  return (
    <S.Wrapper>
      <S.Location>구로구 깔깔거리</S.Location>
      <S.CafeList>
        <S.CafeImg src="" />
        <div>
          <S.CafeName>초심스터디</S.CafeName>
          <S.PriceImg src="/user/main/price.png" />
          <S.Price>1시간</S.Price>
          <S.Price>3,000원</S.Price>
        </div>
        <S.CafeDetail>
          안녕하세요 5월에 오픈한 초심스터디 카페입니다.
        </S.CafeDetail>
        <S.CafeReview>
          여기 깔끔하고 집중 잘돼요. 백색소음 때문인가ㅎ
        </S.CafeReview>
      </S.CafeList>
    </S.Wrapper>
  );
}
