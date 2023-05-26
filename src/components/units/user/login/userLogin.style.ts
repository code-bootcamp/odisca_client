import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 1920px;
  display: flex;
  flex-direction: row;
`;

export const SignUpWrapper = styled.div`
  width: 913px;
  height: 1080px;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpTitle = styled.h1`
  margin-bottom: 80px;
  font-size: 64px;
  font-weight: 900;
  color: #f7f7f7;
`;

export const SignUpButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 12% 12% 12% 12% / 50% 50% 50% 50%;
  border: none;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 26px;
`;

export const LogInWrapper = styled.div`
  width: 1007px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const LogInWrapperContainer = styled.form`
  width: 100%;
  height: 100%;
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

export const LoginTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: #4f4f4f;
  margin-bottom: 7%;
  margin-left: 80px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LogInInputBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogInInputDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const LogInInputTitle = styled.div`
  font-size: 21px;
  font-weight: 400;
  color: #4f4f4f;
  line-height: 55px;
`;
export const LogInInput = styled.input`
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  margin-left: 130px;
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
  margin: 5% 0px 5% 80px;
`;

export const CancelButton = styled.button`
  width: 162px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  width: 162px;
  height: 60px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
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
  margin: 5% 0px 5% 80px;
`;

export const FindContainer = styled.div`
  width: 200px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
`;

export const FindButton = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  cursor: pointer;
`;
