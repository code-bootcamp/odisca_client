import { useQueryFetchReview } from "../../../../commons/hooks/queries/useQueryFetchLoginReviews";
import * as S from "./userReview.styles";

export default function UserReview(): JSX.Element {
  const { data } = useQueryFetchReview();

  return (
    <S.Wrapper>
      {data?.fetchLoginReviewsByUserId.map((el) => (
        <div key={el.review_id}>
          <S.CafeName>{el.studyCafe?.studyCafe_name}</S.CafeName>
          <S.CafeName>{el.review_content}</S.CafeName>
          {el.studyCafe?.images.map((image) =>
            image.image_isMain ? (
              <S.CafeNameI key={image.image_url} src={image.image_url} />
            ) : null
          )}
        </div>
      ))}
    </S.Wrapper>
  );
}
