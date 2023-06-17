import { useQueryFetchReview } from "../../../../commons/hooks/queries/useQueryFetchLoginReviews";
import * as S from "./userReview.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import UseModal from "../../../../commons/hooks/customs/useModal";
import { useState } from "react";
import EditReview from "../../../../commons/reviews/editReview.index";

export default function UserReview(): JSX.Element {
  const { data } = useQueryFetchReview();
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const [Ind, setInd] = useState(0);
  const [vId, setVId] = useState("");

  const onClickSetIndex =
    (i: number, id: string | undefined | null) => (): void => {
      if (id !== undefined && id !== null) {
        setInd(i);
        setVId(id);
        showModal();
      }
    };

  return (
    <>
      {data?.fetchLoginReviewsByUserId.map((el, index) => (
        <div key={el.review_id}>
          <S.Wrapper>
            <S.LeftWrapper>
              <S.CafeName>{el.studyCafe?.studyCafe_name}</S.CafeName>
              <S.ReviewContent>{el.review_content}</S.ReviewContent>
              <S.BtnWrapper>
                <S.ReviewDate>{getDate(el.review_createdAt)}</S.ReviewDate>
              </S.BtnWrapper>
            </S.LeftWrapper>
            <S.RightWrapper>
              {el.studyCafe?.images.map((image) =>
                image.image_isMain ? (
                  <S.CafeImg key={image.image_url} src={image.image_url} />
                ) : null
              )}

              <S.EditReviewBtn onClick={onClickSetIndex(index, el.review_id)}>
                리뷰보기
              </S.EditReviewBtn>
              {isModalOpen !== false && (
                <S.ReviewModal
                  okButtonProps={{ style: { display: "none" } }}
                  cancelButtonProps={{ style: { display: "none" } }}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <EditReview
                    handleCancel={handleCancel}
                    index={Ind}
                    vId={vId}
                  />
                </S.ReviewModal>
              )}
            </S.RightWrapper>
          </S.Wrapper>
          <S.Line></S.Line>
        </div>
      ))}
    </>
  );
}
