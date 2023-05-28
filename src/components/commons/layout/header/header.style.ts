import styled from "@emotion/styled";
import { Drawer } from "antd";

export const Wrapper = styled.div`
  width: 100vw;
  height: 135px;
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
  width: 290px;
  height: 290px;
  margin: -10px 0 0 30px;
  cursor: pointer;
  /* font-size: 50px;
  font-weight: 600;
  color: white; */
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 80px;
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50px;
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
  margin-top: 11px;
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
`;

// drawer의 title 속성 바꾸는 코드
export const MenuDrawer = styled(Drawer)`
  .ant-drawer-title {
    font-size: 25px;
  }
`;
