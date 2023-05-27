import * as S from "./userLogin.style";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { schema } from "../../../../commons/validations/validation";
import { useMutationUserLogin } from "../../../commons/hooks/mutations/useMutationLogin";
import { Modal } from "antd";
// import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";

interface IFormData {
  user_email: string;
  user_password: string;
}

export default function UserLoginPage(): JSX.Element {
  const router = useRouter();
  const [LoginUser] = useMutationUserLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  // const { refetch } = useQueryFetchLoginUser();

  const { register, handleSubmit, formState } = useForm<IFormData>({
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
          loginUserInput: {
            user_email: data.user_email,
            user_password: data.user_password,
          },
        },
      });
      console.log(data);
      const accessToken = result.data?.LoginUser;

      if (accessToken === undefined) {
        Modal.error({
          content: "로그인을 다시 시도해주세요.",
        });
        return;
      }
      setAccessToken(accessToken);
      // await refetch();
      Modal.success({
        content: "로그인 성공!",
        onOk() {
          void router.push(`/user`);
        },
      });

      localStorage.setItem("loginType", "user");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.SignUpWrapper>
          <S.SignUpTitle>아직 회원이 아니신가요?</S.SignUpTitle>
          <S.SignUpButton onClick={onClickMoveSignUp}>
            회원가입하기
          </S.SignUpButton>
        </S.SignUpWrapper>

        <S.LogInWrapper>
          <S.LogInWrapperContainer
            onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}
          >
            <S.LoginTitle>LOGIN</S.LoginTitle>
            <S.InputContainer>
              <S.LogInInputBox>
                <S.LogInInputDetail>
                  <S.LogInInputTitle>Email</S.LogInInputTitle>
                  <S.LogInInput
                    type="text"
                    placeholder="이메일을 입력해주세요."
                    {...register("user_email")}
                  ></S.LogInInput>
                </S.LogInInputDetail>
                <S.ErrorMessage>
                  {formState.errors.user_email?.message}
                </S.ErrorMessage>
              </S.LogInInputBox>

              <S.LogInInputBox>
                <S.LogInInputDetail>
                  <S.LogInInputTitle>Pass</S.LogInInputTitle>

                  <S.LogInInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    {...register("user_password")}
                  ></S.LogInInput>
                </S.LogInInputDetail>
                <S.ErrorMessage>
                  {formState.errors.user_password?.message}
                </S.ErrorMessage>
              </S.LogInInputBox>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.BtnBox>
                <S.CancelButton type="button">CANCEL</S.CancelButton>
              </S.BtnBox>
              <S.BtnBox>
                <S.LogInButton>LOGIN</S.LogInButton>
              </S.BtnBox>
            </S.ButtonContainer>
            <S.SessionLoginContainer>
              <S.Img src="/google.png" />
              <S.Img src="/kakao.png" />
              <S.Img src="/naver.png" />
            </S.SessionLoginContainer>
          </S.LogInWrapperContainer>
        </S.LogInWrapper>
      </S.Wrapper>
    </>
  );
}
