import * as S from "./userLogin.style";
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { schema } from "../../../../commons/validations/validation";

interface IFormData {
  email: string;
  password: string;
}

const LOG_IN = gql`
  mutation LoginUser($loginInput: LoginInput!) {
    LoginUser(loginInput: $loginInput)
  }
`;

export default function UserLoginPage(): JSX.Element {
  const router = useRouter();
  const [LoginUser] = useMutation(LOG_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickMoveSignUp = (): void => {
    void router.push(`/user/signup`);
  };

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    try {
      const result = await LoginUser({
        variables: {
          loginInput: {
            email: data.email,
            password: data.password,
          },
        },
      });
      console.log(data);
      const accessToken = result.data?.LoginUser;
      // setAccessToken(accessToken);
      // if (accessToken) {
      //   setAccessToken(accessToken || "");
      // }
      if (accessToken === undefined) {
        alert("다시 로그인해주세요.");
        return;
      }
      setAccessToken(accessToken);
      alert("로그인이 완료되었습니다!");
      // void router.push(`/main/landingPage`);
      // localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.SignUpWrapper>
          <S.SignUpTitle>아직 회원이 아니신가요?</S.SignUpTitle>
          <S.SignUpButton onClick={onClickMoveSignUp}>SIGNUP</S.SignUpButton>
        </S.SignUpWrapper>
        <S.LogInWrapper>
          {/* login form */}
          <S.LogInWrapperContainer
            onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}
          >
            <S.LoginTitle>LOGIN</S.LoginTitle>
            <S.InputContainer>
              <S.LogInInputBox>
                <S.LogInInputTitle>EMAIL</S.LogInInputTitle>
                <S.LogInInput
                  type="text"
                  placeholder="email을 입력해주세요."
                  {...register("email")}
                ></S.LogInInput>
              </S.LogInInputBox>
              <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
              <S.LogInInputBox>
                <S.LogInInputTitle>PASS</S.LogInInputTitle>
                <S.LogInInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...register("password")}
                ></S.LogInInput>
              </S.LogInInputBox>
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.CancelButton type="button">CANCEL</S.CancelButton>
              <S.LogInButton>LOGIN</S.LogInButton>
            </S.ButtonContainer>
            {/* 소셜 로그인 */}
            <S.SessionLoginContainer>
              <img src="/sessionicons.png" />
            </S.SessionLoginContainer>
            {/* 아이디, 비밀번호 찾기 */}
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
