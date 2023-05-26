import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.main`
  width: 1920px;
  display: flex;
  flex-direction: row;
`;

export const LogInWrapper = styled.div`
  width: 913px;
  height: 1080px;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogInTitle = styled.h1`
  margin-bottom: 80px;
  font-size: 64px;
  font-weight: 900;
  color: #ffffff;
`;

export const LogInButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 12% 12% 12% 12% / 50% 50% 50% 50%;
  border: none;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
`;

export const SignUpWrapper = styled.div`
  width: 1100px;
  height: 950px;
  display: flex;
  margin-top: 100px;
`;

export const SignUpWrapperContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: #4f4f4f;
  margin-bottom: 40px;
  margin-left: 70px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SignUpInputBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const SignUpInputDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SignUpInputTitle = styled.div`
  width: calc(600px - 500px);
  font-size: 20px;
  font-weight: 400;
  color: #4f4f4f;
  line-height: 60px;
`;
export const SignUpInput = styled.input`
  width: 500px;
  height: 54px;

  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #4f4f4f;
  font-size: 18px;
  font-weight: 600;
  color: #4f4f4f;
  padding-left: 10px;
  :focus {
    outline: 2px solid #40e0d0;
    border-bottom: none;
  }
  ::placeholder {
    color: #d4d2d2;
    font-weight: 400;
    font-size: 15px;
  }
`;

export const SignUpInputEmail = styled.input`
  width: 390px;
  height: 54px;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #4f4f4f;
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
  color: #4f4f4f;
  :focus {
    outline: 2px solid #40e0d0;
    border-bottom: none;
  }
  ::placeholder {
    color: #d4d2d2;
    font-weight: 400;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #7744aa;
  margin: 15px 0px 0px 130px;
`;

export const ButtonContainer = styled.div`
  width: 355px;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0px 5% 70px;
`;

export const CancelButton = styled.button`
  width: 162px;
  height: 68px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #f7f7f7;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  width: 162px;
  height: 68px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const EmailValidationModal = styled(Modal)`
  .ant-modal-content {
    width: 450px;
    height: 320px;
  }
`;
export const PhoneButton = styled.button`
  width: 87px;
  height: 54px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #40e0d0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;