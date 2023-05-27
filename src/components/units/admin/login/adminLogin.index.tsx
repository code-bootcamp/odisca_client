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
      alert("로그인 성공");
      void router.push("/admin/adminPage");
      const accessToken = result.data?.LoginAdminister;
      if (
        accessToken === undefined ||
        data.email === undefined ||
        data.password === undefined
      ) {
        Modal.error({
          content: "로그인에 실패! 다시 시도해 주세요!",
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

  return (
    <>
      <S.Wrapper>
        <S.SignUpWrapper>
          <S.SignUpTitle>가입을 시작합니다!</S.SignUpTitle>
          <S.SignUpButton type="button" onClick={onClickMoveSignUp}>
            SIGNUP
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
                  <S.LogInInputTitle>EMAIL</S.LogInInputTitle>
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
                  <S.LogInInputTitle>PASS</S.LogInInputTitle>
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
