import * as S from "./adminLogin.style";

export default function UserLoginPage(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.SignUpWrapper>
          <S.SignUpTitle>가입을 시작합니다.</S.SignUpTitle>
          <S.SignUpButton>SIGNUP</S.SignUpButton>
        </S.SignUpWrapper>
        <S.LogInWrapper>
          <S.LogInWrapperContainer>
            <S.LoginTitle>LOGIN</S.LoginTitle>
            <S.InputContainer>
              <S.LogInInputBox>
                <S.LogInInputTitle>EMAIL</S.LogInInputTitle>
                <S.LogInInput></S.LogInInput>
              </S.LogInInputBox>
              <S.ErrorMessage>이메일 형식이 아닙니다.</S.ErrorMessage>
              <S.LogInInputBox>
                <S.LogInInputTitle>PASS</S.LogInInputTitle>
                <S.LogInInput type="password"></S.LogInInput>
              </S.LogInInputBox>
              <S.ErrorMessage>
                특수문자를 포함하여 8~16자리를 입력해주세요.
              </S.ErrorMessage>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.CancelButton>CANCEL</S.CancelButton>
              <S.LogInButton>LOGIN</S.LogInButton>
            </S.ButtonContainer>
            <S.SessionLoginContainer>
              <img src="/sessionicons-admin.png" />
            </S.SessionLoginContainer>
            <S.FindContainer>
              <S.FindButton>아이디 찾기</S.FindButton>
              <S.FindButton>비밀번호 찾기</S.FindButton>
            </S.FindContainer>
          </S.LogInWrapperContainer>
        </S.LogInWrapper>
      </S.Wrapper>
    </>
  );
}
