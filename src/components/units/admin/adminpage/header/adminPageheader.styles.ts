import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
`;

export const MyPageTitle = styled.h1`
  padding-bottom: 25px;
  border-bottom: 1px solid #bdbdbd;
  font-size: 30px;
`;

export const AdminWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
`;

export const AdminWrapperLight = styled.aside``;

export const ProfileWrapper = styled.header`
  position: relative;
  margin-left: 60px;
  width: 90px;
  height: 90px;
`;

export const ProfileImage = styled.img`
  width: 90px;
  height: 90px;

  border-radius: 50px;
  display: flex;
  position: absolute;
`;

export const EditProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 60px;
  top: 60px;
  cursor: pointer;
`;

export const AdminWrapperRight = styled.aside`
  display: flex;
  flex-direction: row;
`;

export const AdminInfo = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const AdminName = styled.label`
  font-size: 40px;
  color: #4f4f4f;
  margin-bottom: 6px;
`;

export const AdminMail = styled.label`
  font-size: 20px;
  color: #828282;
`;

// =========== Revenue(매출) 부분 ============ //

export const RevenueWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: calc(1000px - 660px);
  width: 300px;
`;

export const RevenueText = styled.label`
  font-size: 20px;
  color: #4f4f4f;
  margin-right: 15px;
`;

export const Revenue = styled.label`
  font-size: 30px;
  color: #4f4f4f;
  margin-right: 8px;
`;
