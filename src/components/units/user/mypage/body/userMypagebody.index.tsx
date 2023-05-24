import UseModal from "../../../../commons/hooks/customs/useModal";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import Review from "../../../../commons/reviews/review.index";
import * as S from "./userMypagebody.styles";

export default function UserMyPageBody(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const { data } = useQueryFetchLoginUser();
  // console.log(
  //   data?.fetchLoginUser.visits.map((visit) => visit.studyCafe.studyCafe_name),
  //   "구매한 스터디카페 이름"
  // );
  console.log(data?.fetchLoginUser.visits, "구매한 스카 목록"); // visits 배열 출력
  // console.log(data?.fetchLoginUser.visits[0].studyCafe.studyCafe_name); // 첫 번째 visit의 studyCafe의 studyCafe_name 출력
  console.log(data?.fetchLoginUser.seat[0].seat_number, "구매한 좌석"); // 첫 번째 seat의 seat_number 출력
  console.log(data?.fetchLoginUser.seat[0], "구매한 좌석정보");

  const minutes = Math.floor(
    data?.fetchLoginUser.seat[0].seat_remainTime / (1000 * 60)
  ); // 분으로 변환
  const remainingHours = Math.floor(minutes / 60); // 시간으로 변환
  const remainingMinutes = minutes % 60; // 남은 분 계산

  return (
    <>
      <S.Wrapper>
        <S.Title>예약내역</S.Title>
        <S.ReservationWrapper>
          <S.LeftWrapper>
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>
                {data?.fetchLoginUser.visits[0].studyCafe.studyCafe_name}
              </S.CafeName>
              <S.SeatInfo>
                좌석: {data?.fetchLoginUser.seat[0].seat_number}
              </S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>
                남은 이용시간 {remainingHours}시간{remainingMinutes}분
              </S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn onClick={showModal}>리뷰쓰기</S.Btn>
              {isModalOpen && (
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
            <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.Top>
              <S.CafeName>
                {data?.fetchLoginUser.visits[1].studyCafe.studyCafe_name}
              </S.CafeName>
              <S.SeatInfo>
                좌석: {data?.fetchLoginUser.seat[0].seat_number}
              </S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>
                남은 이용시간 {remainingHours}시간{remainingMinutes}분
              </S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn>리뷰쓰기</S.Btn>
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
      </S.Wrapper>
    </>
  );
}
