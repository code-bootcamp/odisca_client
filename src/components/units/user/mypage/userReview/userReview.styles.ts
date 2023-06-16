import styled from "@emotion/styled";
import { Modal } from "antd";
import { mediaQueries } from "../../../../commons/media/mediaQueries";

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  margin: 15px 0 15px 40px;
`;

export const Line = styled.div`
  border-top: 1px solid #e7e7e7;
  width: 1000px;
  margin: 0 auto;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(1000px - 150px);
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ReviewContent = styled.a`
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const ReviewDate = styled.a`
  color: #bdbdbd;
  font-size: 15px;
`;

export const CafeName = styled.a`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 35px;
  margin-top: 10px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CafeImg = styled.img`
  width: 110px;
  height: 110px;
`;

export const EditReviewBtn = styled.button`
  background-color: #ffffff;
  border-radius: 10px;
  color: #40e0d0;
  border: 1px solid #40e0d0;
  margin-top: 5px;
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
