import { useRouter } from "next/router";
import * as S from "./adminLogin.style";
import { useMutationAdminLogin } from "../../../commons/hooks/mutations/useMutationAdminLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAdmin } from "../../../../commons/validations/validation";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { Modal } from "antd";

interface IFormData {
  email: string;
  password: string;
}

export default function UserLoginPage(): JSX.Element {
  const router = useRouter();
  const [loginAdmin] = useMutationAdminLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaAdmin),
    mode: "onChange",
  });

  const onClickMoveSignUp = (): void => {
    void router.push("/admin/signup");
  };

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    try {
      const result = await loginAdmin({
        variables: {
          loginAdministerInput: {
            administer_email: data.email,
            administer_password: data.password,
          },
        },
      });
      Modal.success({
        content: "로그인이 완료되었습니다!",
        onOk() {
          void router.push(`/admin`);
        },
      });
      const accessToken = result.data?.LoginAdminister;
      if (
        accessToken === undefined ||
        data.email === undefined ||
        data.password === undefined
      ) {
        Modal.error({
          content: "로그인 실패! 다시 시도해 주세요!",
        });
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("loginType", "admin");
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCancel = (): void => {
    void router.push(`/`);
  };

  return (
    <>
      <S.Wrapper>
        <S.SignUpWrapper>
          <S.SignUpTitle>가입을 시작합니다!</S.SignUpTitle>
          <S.SignUpButton type="button" onClick={onClickMoveSignUp}>
            SIGN UP
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
                    {...register("email")}
                  ></S.LogInInput>
                </S.LogInInputDetail>

                <S.ErrorMessage>
                  {formState.errors.email?.message}
                </S.ErrorMessage>
              </S.LogInInputBox>

              <S.LogInInputBox>
                <S.LogInInputDetail>
                  <S.LogInInputTitle>Pass</S.LogInInputTitle>
                  <S.LogInInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    {...register("password")}
                  ></S.LogInInput>
                </S.LogInInputDetail>

                <S.ErrorMessage>
                  {formState.errors.password?.message}
                </S.ErrorMessage>
              </S.LogInInputBox>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.BtnBox>
                <S.CancelButton>CANCEL</S.CancelButton>
                <S.CancelButton type="button" onClick={onClickCancel}>
                  CANCEL
                </S.CancelButton>
              </S.BtnBox>
              <S.BtnBox>
                <S.LogInButton>LOGIN</S.LogInButton>
              </S.BtnBox>
            </S.ButtonContainer>
            <S.SocialLoginContainer>
              <a href="https://odisca.store/admin/login/google">
                <S.GoogleImg src="/google.png" />
              </a>
              <a href="https://odisca.store/admin/login/kakao">
                <S.Img src="/kakao.png" />
              </a>
              <a href="https://odisca.store/admin/login/naver">
                <S.Img src="/naver.png" />
              </a>
            </S.SocialLoginContainer>
          </S.LogInWrapperContainer>
        </S.LogInWrapper>
      </S.Wrapper>
    </>
  );
}
