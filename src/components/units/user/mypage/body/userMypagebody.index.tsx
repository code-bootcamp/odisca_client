import UseModal from "../../../../commons/hooks/customs/useModal";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import Review from "../../../../commons/reviews/review.index";
import * as S from "./userMypagebody.styles";

export default function UserMyPageBody(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const { data } = useQueryFetchLoginUser();

  const minutes = Math.floor(
    (data?.fetchLoginUser.visits[0]?.seat?.seat_remainTime ?? 0) / (1000 * 60)
  ); // 분으로 변환
  const remainingHours = Math.floor(minutes / 60); // 시간으로 변환
  const remainingMinutes = minutes % 60; // 남은 분 계산

  const minutesSecond = Math.floor(
    (data?.fetchLoginUser.visits[1]?.seat?.seat_remainTime ?? 0) / (1000 * 60)
  ); // 분으로 변환
  const remainingHoursSecond = Math.floor(minutesSecond / 60); // 시간으로 변환
  const remainingMinutesSecond = minutesSecond % 60; // 남은 분 계산

  return (
    <>
      <S.Wrapper>
        <S.Title>이용내역</S.Title>
        <S.ReservationWrapper>
          <S.LeftWrapper>
            <S.CafeImg
              src={
                data?.fetchLoginUser.visits[0]?.studyCafe.images[0]
                  ?.image_url ?? "/cafeImg.jpeg"
              }
            ></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>
                {data?.fetchLoginUser.visits[0]?.studyCafe?.studyCafe_name}
              </S.CafeName>
              <S.SeatInfo>
                좌석: {data?.fetchLoginUser.visits[0]?.seat?.seat_number}
              </S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>
                남은 이용시간 {remainingHours}시간{remainingMinutes}분
              </S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn onClick={showModal}>리뷰쓰기</S.Btn>
              {isModalOpen !== false && (
                <S.ReviewModal
                  okButtonProps={{ style: { display: "none" } }}
                  cancelButtonProps={{ style: { display: "none" } }}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Review handleCancel={handleCancel} />
                </S.ReviewModal>
              )}
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
        <S.ReservationWrapper>
          <S.LeftWrapper>
            <S.CafeImg
              src={
                data?.fetchLoginUser.visits[1]?.studyCafe.images[0]
                  ?.image_url ?? "/cafeImg.jpeg"
              }
            ></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>
                {data?.fetchLoginUser.visits[1]?.studyCafe?.studyCafe_name}
              </S.CafeName>
              <S.SeatInfo>
                좌석: {data?.fetchLoginUser.visits[1]?.seat?.seat_number}
              </S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>
                남은 이용시간 {remainingHoursSecond}시간{remainingMinutesSecond}
                분
              </S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn onClick={showModal}>리뷰쓰기</S.Btn>
              {isModalOpen !== false && (
                <S.ReviewModal
                  okButtonProps={{ style: { display: "none" } }}
                  cancelButtonProps={{ style: { display: "none" } }}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Review handleCancel={handleCancel} />
                </S.ReviewModal>
              )}
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
      </S.Wrapper>
    </>
  );
}
