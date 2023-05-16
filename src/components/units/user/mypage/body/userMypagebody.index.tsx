import { Modal } from "antd";
import UseModal from "../../../../commons/hooks/customs/useModal";
import Review from "../../../../commons/reviews/review.index";
import * as S from "./userMypagebody.styles";

export default function UserMyPageBody(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();

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
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.SeatInfo>좌석 A16</S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>남은시간 30분</S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn onClick={showModal}>리뷰쓰기</S.Btn>
              {isModalOpen && (
                <S.ReviewModal
                  // style={{ width: "600px" }}
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
              <S.CafeName>초심스터디카페</S.CafeName>
              <S.SeatInfo>좌석 A16</S.SeatInfo>
            </S.Top>
            <S.Bottom>
              <S.RemainingTime>남은시간 30분</S.RemainingTime>
              <S.Btn>이용종료</S.Btn>
              <S.Btn>리뷰쓰기</S.Btn>
            </S.Bottom>
          </S.RightWrapper>
        </S.ReservationWrapper>
      </S.Wrapper>
    </>
  );
}
