import { useQueryFetchReview } from "../../../../commons/hooks/queries/useQueryFetchLoginReviews";
import * as S from "./userReview.styles";

export default function UserReview(): JSX.Element {
  const { data } = useQueryFetchReview();

  return (
    <S.Wrapper>
      {data?.fetchLoginReviewsByUserId.map((review, index) => (
        <div key={index}>{review?.review_content ?? "ㅇㅇ"}</div>
      ))}
    </S.Wrapper>
  );
}
