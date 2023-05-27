import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #4f4f4f;
`;

export const LogInWrapper = styled.div`
  width: 50%;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogInTitle = styled.h1`
  margin-bottom: 80px;
  font-size: 80px;
  font-weight: 900;
  color: #4f4f4f;
`;

export const LogInButton = styled.button`
  width: 350px;
  height: 80px;
  border-radius: 10% / 50%;
  border: none;
  color: #40e0d0;
  background-color: #4f4f4f;
  font-size: 35px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
`;

export const SignUpWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 70px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 4vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 80px;
`;

export const SignUpInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const SignUpInputDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const TitleBox = styled.div`
  width: 130px;
`;

export const SignUpInputTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  line-height: 60px;
`;

export const SignUpInput = styled.input`
  width: 530px;
  height: 54px;
  background-color: #4f4f4f;
  border: none;
  border-bottom: 1px solid #f7f7f7;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  :focus {
    outline: 3px solid #40e0d0;
    border-bottom: none;
  }
  ::placeholder {
    color: #d4d2d2;
    font-weight: 400;
    font-size: 18px;
    padding-left: 10px;
  }
`;

export const SignUpInputEmail = styled.input`
  width: 420px;
  height: 54px;
  background-color: #4f4f4f;
  border: none;
  border-bottom: 1px solid #f7f7f7;
  font-size: 18px;
  font-weight: 600;
  :focus {
    outline: 3px solid #40e0d0;
    border-bottom: none;
  }
  ::placeholder {
    color: #d4d2d2;
    font-weight: 400;
    font-size: 18px;
    padding-left: 10px;
  }
`;

export const ErrorMessage = styled.div`
  margin-left: 155px;
  font-size: 18px;
  font-weight: 400;
  color: #ffd600;
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
  background-color: #4f4f4f;
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
  margin-left: 22px;
`;
