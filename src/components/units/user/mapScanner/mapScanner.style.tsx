import styled from "@emotion/styled";
import { Drawer, Modal } from "antd";

export const Pixel = styled.div`
  width: 22px;
  height: 22px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SeatsTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 70px;
  color: #4f4f4f;
`;

export const SeatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 170px;
  margin-bottom: 150px;
`;

export const SampleCase = styled.div`
  display: flex;
  align-items: center;
`;

export const SampleFont = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #4f4f4f;
`;

export const SampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const SeatSample = styled.div`
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: #e4e4e4;
  border: 1px solid #fefefe;
`;

export const SeatSampleUnUsable = styled.div`
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: #323232;
  border: 1px solid #fefefe;
`;

// ======== Modal창 관련 ======== //

export const PayModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ant-modal-content {
    width: 400px;
    height: 480px;
  }

  .ant-modal-body {
  }
`;

export const Top = styled.div`
  width: 464px;
  text-align: center;
  margin-top: 20px;
  padding-top: 30px;
  margin-bottom: 27px;
`;

export const TopTitle = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-right: 105px;
  margin-top: 30px;
`;

export const MiddileWrapper = styled.div``;

export const Line = styled.div`
  border-bottom: 1.5px solid #4f4f4f;
  width: 330px;
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 11px;
`;
export const SelectBox = styled.div`
  position: relative;
  color: #fff;
  font-size: large;
  font-weight: 500;
  left: 0.5vw;
  width: 330px;
  top: 4vh;
  height: 40px;
  padding: 8px;
  border-radius: 15px;
  background-color: rgba(79, 79, 79, 0.8);
  align-self: center;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #40e0d0;
    font-size: 20px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  align-self: center;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 150px;
  max-height: ${(props) => (props.show ? "150px" : "0")};
  padding: 0;
  border-radius: 15px;
  background-color: rgba(79, 79, 79, 1);
  color: #fefefe;
  transition: max-height 0.2s ease-in;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 7px 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

export const Bottom = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ChargeBtn = styled.button`
  width: 135px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  background-color: #40e0d0;
  margin-top: 35px;
  margin-left: 11px;
`;

export const CancleBtn = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  background-color: #fff;
  margin-top: 35px;
  margin-left: 11px;
`;

// ======== Drawer 관련 ======== //
// drawer의 메뉴 리스트 속성 바꾸는 코드
export const MenuListWrapper = styled.div`
  p {
    margin-bottom: 15px;
    color: #4f4f4f;
    font-weight: 600;
    font-size: 18px;
    transition: margin-left 0.3s ease;
    :hover {
      margin-left: 30px;
      color: #40e0d0;
    }
    cursor: pointer;
  }

  button {
    background-color: #40e0d0;
  }
`;

// drawer의 title 속성 바꾸는 코드
export const MenuDrawer = styled(Drawer)`
  .ant-drawer-title {
    font-size: 27px;
    color: #4f4f4f;
  }
`;
