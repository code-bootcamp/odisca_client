import { useRouter } from "next/router";
import { useState } from "react";
import UseModal from "../../../../commons/hooks/customs/useModal";
import { useQueryFetchLoginReviewByVisitId } from "../../../../commons/hooks/queries/useQueryFetchLoginReviewByVisitId";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import Review from "../../../../commons/reviews/review.index";
import * as S from "./userMypagebody.styles";

export default function UserMyPageBody(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const { data } = useQueryFetchLoginUser();
  const router = useRouter();
  const [Ind, setInd] = useState(0);
  const [vId, setVId] = useState("");
  const { data: reviewdata } = useQueryFetchLoginReviewByVisitId(vId);

  const onClickSetIndex = (i: number, id: string) => (): void => {
    setInd(i);
    setVId(id);
    showModal();
  };

  const onClickMoveVisitedCafe = (address: string) => (): void => {
    void router.push(`/user/${address}`);
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>이용내역</S.Title>
        {data?.fetchLoginUser.visits.map((visit, index) => {
          const minutes = Math.floor(
            (visit.seat?.seat_remainTime ?? 0) / (1000 * 60)
          );
          const remainingHours = Math.floor(minutes / 60);
          const remainingMinutes = minutes % 60;

          return (
            <S.ReservationWrapper key={visit.visit_id}>
              <S.LeftWrapper>
                <S.CafeImg
                  src={visit.studyCafe.images[0]?.image_url ?? "/cafeImg.jpeg"}
                  onClick={onClickMoveVisitedCafe(
                    visit.studyCafe.studyCafe_id ?? ""
                  )}
                ></S.CafeImg>
              </S.LeftWrapper>
              <S.RightWrapper>
                <S.Top>
                  <S.CafeName
                    onClick={onClickMoveVisitedCafe(
                      visit.studyCafe.studyCafe_id ?? ""
                    )}
                  >
                    {visit.studyCafe?.studyCafe_name}
                  </S.CafeName>
                  <S.SeatInfo>좌석번호: {visit.seat?.seat_number}</S.SeatInfo>
                </S.Top>
                <S.Bottom>
                  {remainingHours === 0 && remainingMinutes === 0 ? (
                    <S.RemainingTime>이용 종료</S.RemainingTime>
                  ) : (
                    <S.RemainingTime>
                      남은 이용시간 {remainingHours}시간{remainingMinutes}분
                    </S.RemainingTime>
                  )}

                  {/* <S.Btn>이용종료</S.Btn> */}
                  {reviewdata?.fetchLoginReviewByVisitId.review_content !==
                  undefined ? (
                    <S.Btn onClick={onClickSetIndex(index, visit.visit_id)}>
                      내 리뷰
                    </S.Btn>
                  ) : (
                    <S.Btn onClick={onClickSetIndex(index, visit.visit_id)}>
                      내 리뷰
                    </S.Btn>
                  )}
                  {isModalOpen !== false && (
                    <S.ReviewModal
                      okButtonProps={{ style: { display: "none" } }}
                      cancelButtonProps={{ style: { display: "none" } }}
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Review
                        handleCancel={handleCancel}
                        index={Ind}
                        vId={vId}
                      />
                    </S.ReviewModal>
                  )}
                </S.Bottom>
              </S.RightWrapper>
            </S.ReservationWrapper>
          );
        })}
      </S.Wrapper>
    </>
  );
}
