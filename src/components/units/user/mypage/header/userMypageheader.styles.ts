import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
`;

export const MyPageTitle = styled.h1`
  padding-bottom: 25px;
  border-bottom: 1px solid #4f4f4f;
  font-size: 30px;
`;

export const UserWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
`;

export const UserWrapperLight = styled.aside`
  display: flex;
  align-items: center;
  padding-left: 45px;
`;

export const ProfileWrapper = styled.header`
  margin: 0;
`;

export const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  display: flex;
`;

export const EditBtn = styled.button`
  cursor: pointer;
  height: 26px;
  width: 70px;
  border: 1px solid #40e0d0;
  background-color: #ffffff;
  color: #40e0d0;
  border-radius: 20px;
  margin-top: 8px;
  margin-left: 9px;
`;

export const UserWrapperRight = styled.aside`
  display: flex;
  flex-direction: row;
`;

export const UserInfo = styled.header`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  /* margin-top: 8px; */
`;

export const InfoWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin-left: 205px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 7px;
  margin-right: 8px;
`;

export const UserPoint = styled.label`
  font-size: 30px;
  color: #4f4f4f;
  margin-right: 8px;
`;

export const PointBtn = styled.button`
  width: 48px;
  border: none;
  background-color: #40e0d0;
  color: white;
  border-radius: 15px;
  height: 26px;
  font-size: 15px;
  margin-bottom: 6px;
  margin-right: 8px;
  cursor: pointer;
`;

export const PaymentBtn = styled.button`
  width: 70px;
  border: 1px solid #40e0d0;
  background-color: #ffffff;
  color: #40e0d0;
  border-radius: 15px;
  height: 26px;
  font-size: 15px;
  margin-bottom: 6px;
  margin-right: 8px;
  cursor: pointer;
`;
