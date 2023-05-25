import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { signUpSchema } from "../../../../commons/validations/validation";
import EmailValidationPage from "../../../commons/emailValidation/emailValidation.index";
import UseModal from "../../../commons/hooks/customs/useModal";
import { useMutationCreateUser } from "../../../commons/hooks/mutations/useMutationCreateUser";
import { useMutationSendVerificationCode } from "../../../commons/hooks/mutations/useMutationSendVerification";
import * as S from "./userSignup.style";

interface IFormData {
  name: string;
  password: string;
  email: string;
  confirmPw: string;
  phone: string;
}

export default function UserSignUpPage(): JSX.Element {
  const [sendVerificationCode] = useMutationSendVerificationCode();
  const [createUser] = useMutationCreateUser();
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();

  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const onClickSendVerification = async (data: IFormData): Promise<void> => {
    try {
      const verificationResult = sendVerificationCode({
        variables: { email: data.email },
      });
      console.log(verificationResult);
      showModal();
      console.log(data.email);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickUserSingUp = async (data: IFormData): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            user_email: data.email,
            user_name: data.name,
            user_password: data.password,
            user_phone: data.phone,
          },
        },
      });
      console.log(data.email);
      console.log(result);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
      return;
    }

    Modal.success({
      content: "회원가입이 완료되었습니다. 로그인해주세요!",
    });
    void router.push("/user/login"); // 로그인이 된 상태로 로그인 페이지 이동함.
    console.log(data);
  };
  return (
    <>
      <S.Wrapper>
        <S.LogInWrapper>
          <S.LogInTitle>어디스카 회원이신가요?</S.LogInTitle>
          <S.LogInButton type="button">로그인하기</S.LogInButton>
        </S.LogInWrapper>
        <S.SignUpWrapper>
          <S.SignUpWrapperContainer
            onSubmit={wrapFormAsync(handleSubmit(onClickUserSingUp))}
          >
            <S.TitleWrapper>
              <S.SignUpTitle>회원가입</S.SignUpTitle>
            </S.TitleWrapper>

            <S.InputContainer>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>name</S.SignUpInputTitle>
                <S.InputWrapper>
                  <S.SignUpInput
                    type="text"
                    {...register("name")}
                    placeholder="이름"
                  ></S.SignUpInput>
                  <S.ErrorMessage>
                    {formState.errors.name?.message}
                  </S.ErrorMessage>
                </S.InputWrapper>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputTitle>email</S.SignUpInputTitle>
                <S.MailInputWrapper>
                  <S.Left>
                    <S.SignUpInputEmail
                      type="text"
                      {...register("email")}
                      placeholder="user@google.com"
                    ></S.SignUpInputEmail>

                    <S.ErrorMessage>
                      {formState.errors.email?.message}
                    </S.ErrorMessage>
                  </S.Left>
                  <S.Right>
                    <S.EmailValidationBtn
                      type="button"
                      onClick={wrapFormAsync(
                        handleSubmit(onClickSendVerification)
                      )}
                    >
                      인증하기
                    </S.EmailValidationBtn>
                    {isModalOpen !== null && (
                      <S.EmailValidationModal
                        okButtonProps={{ style: { display: "none" } }}
                        cancelButtonProps={{ style: { display: "none" } }}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <EmailValidationPage handleCancel={handleCancel} />
                      </S.EmailValidationModal>
                    )}
                  </S.Right>
                </S.MailInputWrapper>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputTitle>password</S.SignUpInputTitle>
                <S.InputWrapper>
                  <S.SignUpInput
                    {...register("password")}
                    type="password"
                  ></S.SignUpInput>
                  <S.ErrorMessage>
                    {formState.errors.password?.message}
                  </S.ErrorMessage>
                </S.InputWrapper>
              </S.SignUpInputBox>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>confirm password</S.SignUpInputTitle>
                <S.InputWrapper>
                  <S.SignUpInput
                    {...register("confirmPw")}
                    type="password"
                  ></S.SignUpInput>
                  <S.ErrorMessage>
                    {formState.errors.confirmPw?.message}
                  </S.ErrorMessage>
                </S.InputWrapper>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputTitle>Phone</S.SignUpInputTitle>
                <S.InputWrapper>
                  <S.SignUpInput
                    {...register("phone")}
                    type="text"
                  ></S.SignUpInput>
                  <S.ErrorMessage>
                    {formState.errors.phone?.message}
                  </S.ErrorMessage>
                </S.InputWrapper>
              </S.SignUpInputBox>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.CancelButton type="button">CANCEL</S.CancelButton>
              <S.SignUpButton>SIGN UP</S.SignUpButton>
            </S.ButtonContainer>
          </S.SignUpWrapperContainer>
        </S.SignUpWrapper>
      </S.Wrapper>
    </>
  );
}
