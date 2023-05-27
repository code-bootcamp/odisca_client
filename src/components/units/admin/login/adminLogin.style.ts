import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const SignUpWrapper = styled.div`
  width: 50%;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitle = styled.h1`
  margin-bottom: 80px;
  font-size: 80px;
  font-weight: 900;
  color: #4f4f4f;
`;

export const SignUpButton = styled.button`
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

export const LogInWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4f4f4f;
`;

export const LogInWrapperContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-size: 90px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 7vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 140px;
`;

export const LogInInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const LogInInputDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const LogInInputTitle = styled.div`
  font-size: 48px;
  font-weight: 400;
  color: #ffffff;
  line-height: 55px;
`;
export const LogInInput = styled.input`
  width: 530px;
  height: 54px;
  background-color: #4f4f4f;
  border: none;
  border-bottom: 2px solid #f7f7f7;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  margin-left: 20px;
  :focus {
    outline: 3px solid #40e0d0;
    border-bottom: none;
  }
  ::placeholder {
    color: #d4d2d2;
    font-weight: 400;
    font-size: 15px;
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
  width: 50%;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const CancelButton = styled.button`
  width: 180px;
  height: 80px;
  border-radius: 50px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #4f4f4f;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  width: 180px;
  height: 80px;
  border-radius: 25% /65%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const SessionLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Img = styled.img`
  width: 80px;
  margin: 10px;
  cursor: pointer;
`;
