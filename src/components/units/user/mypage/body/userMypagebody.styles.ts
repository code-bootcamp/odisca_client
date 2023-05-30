import styled from "@emotion/styled";
import { Modal } from "antd";
import { mediaQueries } from "../../../../commons/media/mediaQueries";

export const Wrapper = styled.aside`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.a`
  font-size: 18px;
  color: #828282;
  margin: 40px 0 20px 0;
`;

export const ReservationWrapper = styled.main`
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const LeftWrapper = styled.div``;

export const CafeImg = styled.img`
  width: 320px;
  height: 200px;
  cursor: pointer;
`;

export const RightWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div``;

export const CafeName = styled.h3`
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const SeatInfo = styled.div`
  color: #828282;
  font-size: 15px;
`;

export const Bottom = styled.div`
  width: calc(1000px - 356px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const RemainingTime = styled.div`
  color: #828282;
  font-size: 15px;
  margin-right: 10px;
`;

export const Btn = styled.button`
  border: none;
  background-color: #40e0d0;
  border-radius: 15px;
  color: white;
  font-size: 14px;
  width: 65px;
  height: 22px;
  cursor: pointer;
  margin-right: 9px;
`;

export const ReviewModal = styled(Modal)`
  .ant-modal-content {
    width: 800px;
    height: 900px;
    left: -6vw;
    ${mediaQueries("macBook")} {
      width: 700px;
      left: -3vw;
    }
  }

  .ant-modal-body {
  }
`;
