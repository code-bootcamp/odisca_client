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
  margin-bottom: 5%;
  font-size: 64px;
  font-weight: 900;
  color: #ffffff;
`;

export const LogInButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 50px;
  border: none;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 26px;
`;

export const SignUpWrapper = styled.div`
  width: 1007px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpWrapperContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 530px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SignUpTitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  color: #4f4f4f;
  margin-bottom: 7%;
  margin: 0;
`;

export const InputContainer = styled.div`
  height: 732px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SignUpInputBox = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpInputTitle = styled.div`
  width: calc(550px - 400px);
  font-size: 21px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const SignUpInput = styled.input`
  width: calc(550px - 100px); //450
  height: 54px;
  border-radius: 2% 2% 2% 2% / 20% 20% 20% 20%;
  background-color: #f7f7f7;
  border: none;
  font-size: 13px;
  font-weight: 400;
  padding-left: 10px;
  :focus {
    outline: 2px solid #40e0d0; // 이게 아웃라인 색 변경
  }
  ::placeholder {
    color: #999;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MailInputWrapper = styled.div`
  width: 450px;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
`;

export const SignUpInputEmail = styled.input`
  height: 54px;
  border-radius: 2% 2% 2% 2% / 20% 20% 20% 20%;
  background-color: #f7f7f7;
  border: none;
  font-size: 13px;
  font-weight: 400;
  padding-left: 10px;
  :focus {
    outline: 2px solid #40e0d0; // 이게 아웃라인 색 변경
  }
  ::placeholder {
    color: #999;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #7744aa;
`;

export const ButtonContainer = styled.div`
  width: 355px;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0;
`;

export const CancelButton = styled.button`
  width: 162px;
  height: 68px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 26px;
  font-weight: 600;
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
`;

export const EmailValidationBtn = styled.button`
  width: 87px;
  height: 46px;
  border-radius: 2% 2% 2% 2% / 20% 20% 20% 20%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 16px;
  font-weight: 600;
`;

export const EmailValidationModal = styled(Modal)`
  .ant-modal-content {
    width: 450px;
    height: 320px;
  }
`;
