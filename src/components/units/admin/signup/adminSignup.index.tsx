import * as S from "./adminSignup.style";

export default function UserSignUpPage(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.LogInWrapper>
          <S.LogInTitle>관리자이신가요?</S.LogInTitle>
          <S.LogInButton>LOGIN</S.LogInButton>
        </S.LogInWrapper>
        <S.SignUpWrapper>
          <S.SignUpWrapperContainer>
            <S.SignUpTitle>SIGN UP</S.SignUpTitle>
            <S.InputContainer>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>NAME</S.SignUpInputTitle>
                <S.SignUpInput placeholder="이름"></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>이름을 입력해 주세요.</S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>EMAIL</S.SignUpInputTitle>
                <S.SignUpInput placeholder="user@google.com"></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>이메일 형식이 아닙니다.</S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PASS</S.SignUpInputTitle>
                <S.SignUpInput type="password"></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>
                특수문자를 포함하여 8~16자리를 입력해주세요.
              </S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PASS</S.SignUpInputTitle>
                <S.SignUpInput type="password"></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>
                특수문자를 포함하여 8~16자리를 입력해주세요.
              </S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PHONE</S.SignUpInputTitle>
                <S.SignUpInputPhone placeholder="010-1234-5678"></S.SignUpInputPhone>
                <S.PhoneButton>CLICK</S.PhoneButton>
              </S.SignUpInputBox>
              <S.ErrorMessage>휴대폰 번호를 입력해주세요.</S.ErrorMessage>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.CancelButton>CANCEL</S.CancelButton>
              <S.SignUpButton>SIGN UP</S.SignUpButton>
            </S.ButtonContainer>
          </S.SignUpWrapperContainer>
        </S.SignUpWrapper>
      </S.Wrapper>
    </>
  );
}
