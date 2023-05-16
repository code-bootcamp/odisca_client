import styled from "@emotion/styled";
import { Drawer } from "antd";

export const Wrapper = styled.div`
  height: 150px;
  display: flex;
  background-color: #40e0d0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 65px;
`;

export const LightWrapper = styled.div``;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 300px;
  height: 330px;
  margin: 23px 0 0 40px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 80px;
`;

export const ProfileIcon = styled.img`
  width: 33px;
  height: 33px;
  margin-right: 8px;
`;
export const Name = styled.div`
  font-size: 18px;
  font-weight: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const Text = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  color: white;
`;

export const Menu = styled.div`
  width: 20px;
  margin: 0 150px 0 8px;
  cursor: pointer;
`;
export const MenuIcon = styled.div`
  border-bottom: 2px solid white;
  margin-bottom: 7px;
`;

// drawer의 메뉴 리스트 속성 바꾸는 코드
export const MenuList = styled.div`
  p {
    margin-bottom: 10px;
    color: #4f4f4f;
    font-size: 18px;
  }
`;

// drawer의 title 속성 바꾸는 코드
export const MenuDrawer = styled(Drawer)`
  .ant-drawer-title {
    font-size: 20px;
  }
`;

export const PayButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #40e0d0;
  border-radius: 10px;
  width: 48px;
  height: 26px;
  font-size: 15px;
  margin-bottom: 6px;
  border: none;
`;
