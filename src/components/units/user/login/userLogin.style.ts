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
  margin-bottom: 5%;
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
`;

export const SignUpButton = styled.button`
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
export const TitleWrapper = styled.div`
  width: 530px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoginTitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  color: #4f4f4f;
  margin-bottom: 7%;
  margin: 0;
`;

export const InputContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const LogInInputBox = styled.div`
  width: 530px;
  display: flex;
  align-items: center;
`;

export const LogInInputTitle = styled.div`
  width: calc(530px - 400px);
  font-size: 21px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const LogInInput = styled.input`
  width: calc(530px - 100px);
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #7744aa;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  width: 530px;
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;

export const CancelButton = styled.button`
  width: 162px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  width: 162px;
  height: 60px;
  border-radius: 25% 25% 25% 25% / 65% 65% 65% 65%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
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
  font-size: 15px;
  font-weight: 400;
  color: #4f4f4f;
  cursor: pointer;
`;
