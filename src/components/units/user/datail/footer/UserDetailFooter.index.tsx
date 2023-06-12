// 댓글페이지
import { IReview } from "../../../../../commons/types/generated/types";
import * as S from "./UserDetailFooter.styles";

interface IReviewPageProps {
  reviews: IReview[];
}

export default function UserDetailFooter(props: IReviewPageProps): JSX.Element {
  return (
    <S.Footer>
      {props.reviews.length > 0 ? (
        <S.TitleWrapper>
          <S.Icon src="/review.png" />
          <S.Label>이용후기</S.Label>
        </S.TitleWrapper>
      ) : (
        <></>
      )}
      {props.reviews.length > 0 ? (
        props.reviews.map((el: IReview) => (
          <div key={el.review_id}>
            <S.UserWrapper>
              <S.UserImg src={el.user?.user_image ?? "/profileIcon.png"} />
              <S.UserName>{el.user?.user_name ?? ""}</S.UserName>
            </S.UserWrapper>
            <S.ContentWrapper>
              <S.Content>{el.review_content ?? ""}</S.Content>
            </S.ContentWrapper>
          </div>
        ))
      ) : (
        <></>
      )}
    </S.Footer>
  );
}
