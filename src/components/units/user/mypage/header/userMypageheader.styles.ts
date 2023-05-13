import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`;

export const MyPageTitle = styled.h1`
  padding-bottom: 25px;
  border-bottom: 1px solid #4f4f4f;
  font-size: 40px;
`;

export const UserWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  background-color: aliceblue;
`;

export const UserWrapperLight = styled.aside``;

export const ProfileWrapper = styled.header`
  position: relative;
  margin-left: 60px;
  width: 90px;
  height: 90px;
`;

export const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  background-color: #40e0d0;
  border-radius: 50px;
  display: flex;
  position: absolute;
`;

export const EditProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  z-index: 1000;
  position: absolute;
  left: 60px;
  top: 60px;
`;

export const UserWrapperRight = styled.aside`
  display: flex;
  flex-direction: row;
`;

export const UserInfo = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const UserName = styled.label`
  font-size: 40px;
  color: #4f4f4f;
`;

export const UserMail = styled.label`
  font-size: 20px;
  color: #828282;
`;

// =========== user point 부분 ============ //

export const UserPointWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: calc(1200px - 580px);
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: 8px;
`;

export const UserPoint = styled.label`
  font-size: 30px;
  color: #4f4f4f;
  margin-right: 8px;
`;

export const ChargeBtn = styled.button`
  border: none;
  background-color: #40e0d0;
  color: white;
  border-radius: 10px;
  width: 48px;
  height: 26px;
  font-size: 15px;
  margin-bottom: 6px;
`;
