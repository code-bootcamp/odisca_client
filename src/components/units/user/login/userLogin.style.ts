import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/media/mediaQueries";

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
  font-size: 50px;
  font-weight: 700;
  color: #f7f7f7;

  ${mediaQueries("macBook")} {
    font-size: 45px;
  }
`;

export const SignUpButton = styled.button`
  width: 280px;
  height: 70px;
  border-radius: 10% / 50%;
  border: none;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;

  ${mediaQueries("macBook")} {
    font-size: 25px;
    width: 200px;
    height: 60px;
    border-radius: 20px;
    margin-top: 18px;
  }
`;

export const LogInWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  justify-content: center;
`;

export const LoginTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #4f4f4f;
  margin: 0 0 7vh 4vh;

  ${mediaQueries("macBook")} {
    font-size: 40px;
    margin: 0 0 5vh 4vh;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const LogInInputTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: #4f4f4f;
  line-height: 55px;

  ${mediaQueries("macBook")} {
    font-size: 25px;
  }
`;
export const LogInInput = styled.input`
  width: 450px;
  height: 54px;
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #4f4f4f;
  font-size: 25px;
  font-weight: 600;
  color: #4f4f4f;
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #7744aa;
  margin-left: 115px;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 30px;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const CancelButton = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  background-color: #ffffff;
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;

  ${mediaQueries("macBook")} {
    font-size: 20px;
    width: 130px;
  }
`;

export const LogInButton = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 25% / 65%;
  border: none;
  color: #ffffff;
  background-color: #40e0d0;
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;

  ${mediaQueries("macBook")} {
    font-size: 20px;
    width: 130px;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 35px;
`;

export const Img = styled.img`
  width: 60px;
  margin: 10px;
  cursor: pointer;

  ${mediaQueries("macBook")} {
    margin: 7px;
  }
`;
