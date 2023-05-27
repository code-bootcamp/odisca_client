import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 60px;
  font-weight: 700;
  color: #4f4f4f;
`;

export const SignUpButton = styled.button`
  width: 280px;
  height: 70px;
  border-radius: 10% / 50%;
  border: none;
  color: #40e0d0;
  background-color: #4f4f4f;
  font-size: 35px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 26px;
`;

export const LogInWrapper = styled.div`
  width: 50%;
  height: 100vh;
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
  font-size: 65px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 7vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
`;

export const LogInInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const LogInInputDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const LogInInputTitle = styled.div`
  font-size: 33px;
  font-weight: 400;
  color: #ffffff;
  line-height: 55px;
`;
export const LogInInput = styled.input`
  width: 450px;
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
  font-size: 18px;
  font-weight: 400;
  color: #ffd600;
  margin-left: 115px;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const CancelButton = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #4f4f4f;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 25% / 65%;
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
  width: 60px;
  margin: 10px;
  cursor: pointer;
`;
