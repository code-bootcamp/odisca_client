// 댓글페이지
import { IReview } from "../../../../../commons/types/generated/types";
import * as S from "./UserDetailFooter.styles";

interface IReviewPageProps {
  reviews: IReview[];
}

export default function UserDetailFooter(props: IReviewPageProps): JSX.Element {
  return (
    <S.Footer>
      <S.TitleWrapper>
        <S.Icon src="/review.png" />
        <S.Label>이용후기</S.Label>
      </S.TitleWrapper>
      {props.reviews.length > 0 ? (
        props.reviews.map((el: IReview) => (
          <div key={el.review_id}>
            <S.UserWrapper>
              <S.UserImg src={el.user?.user_image ?? "/profileIcon.png"} />
              <S.UserName>{el.user?.user_name ?? "성해"}</S.UserName>
            </S.UserWrapper>
            <S.ContentWrapper>
              <S.Content>{el.review_content ?? "여기 완전 좋아요."}</S.Content>
            </S.ContentWrapper>
            <S.UserWrapper>
              <S.UserImg src={el.user?.user_image ?? "/profileIcon.png"} />
              <S.UserName>{el.user?.user_name ?? "성해"}</S.UserName>
            </S.UserWrapper>
            <S.ContentWrapper>
              <S.Content>{el.review_content ?? "여기 완전 좋아요."}</S.Content>
            </S.ContentWrapper>
          </div>
        ))
      ) : (
        <div>
          <S.UserWrapper>
            <S.UserImg src="/profileIcon.png" />
            <S.UserName>성해</S.UserName>
          </S.UserWrapper>
          <S.ContentWrapper>
            <S.Content>여기 완전 좋아요.</S.Content>
          </S.ContentWrapper>
          <S.UserWrapper>
            <S.UserImg src="/profileIcon.png" />
            <S.UserName>성해</S.UserName>
          </S.UserWrapper>
          <S.ContentWrapper>
            <S.Content>여기 완전 좋아요.</S.Content>
          </S.ContentWrapper>
        </div>
      )}
    </S.Footer>
  );
}
