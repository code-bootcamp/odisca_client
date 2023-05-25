// 댓글페이지
import { IReview } from "../../../../../commons/types/generated/types";
import * as S from "./UserDetailFooter.styles";

interface IReviewPageProps {
  reviews: IReview[];
}

export default function UserDetailFooter(props: IReviewPageProps): JSX.Element {
  return (
    <S.Footer>
      <S.Icon src="/review.png" />
      <S.Label>이용후기</S.Label>
      {props.reviews.map((el: IReview) => {
        return (
          <div key={el.review_id}>
            <div>
              <img src={el.user?.user_image} width={"50px"} height={"50px"} />
              <div>{el.user?.user_name}</div>
            </div>

            <div>{el.review_content}</div>
          </div>
        );
      })}
    </S.Footer>
  );
}
