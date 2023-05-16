import * as S from "./review.styles";

export default function Review(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.CafeName></S.CafeName>
          <S.Seat></S.Seat>
          <S.VisitDate></S.VisitDate>
        </S.Title>
        <S.ImgWrapper>
          <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
        </S.ImgWrapper>
        <S.ReviewWrapper>
          <S.ReviewTitle>리뷰를 작성해주세요.</S.ReviewTitle>
          <S.ReviewInput placeholder="무분별한 비방, 욕설 등 타인을 불쾌하게 하는 댓글은 사전 통보 없이 삭제될 수 있습니다."></S.ReviewInput>
          <S.ReviewBtn>등록</S.ReviewBtn>
        </S.ReviewWrapper>
      </S.Wrapper>
    </>
  );
}
