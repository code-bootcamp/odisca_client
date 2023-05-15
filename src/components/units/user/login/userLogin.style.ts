import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 5%;
  font-size: 64px;
  font-weight: 900;
  color: #ffffff;
`;

export const SignUpButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 12% 12% 12% 12% / 50% 50% 50% 50%;
  border: none;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 600;
`;

export const LogInWrapper = styled.div`
  width: 1007px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogInWrapperContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: #4f4f4f;
  margin-bottom: 7%;
`;

export const InputContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LogInInputBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogInInputTitle = styled.div`
  font-size: 27px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const LogInInput = styled.input`
  width: 500px;
  height: 54px;
  border-radius: 2% 2% 2% 2% / 20% 20% 20% 20%;
  background-color: #f7f7f7;
  border: none;
  font-size: 27px;
  font-weight: 600;
  padding-left: 2%;
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

export const LogInButton = styled.button`
  width: 162px;
  height: 68px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 26px;
  font-weight: 600;
`;

export const SessionLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5% 0;
`;

export const FindContainer = styled.div`
  width: 200px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FindButton = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
