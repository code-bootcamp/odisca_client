import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { adminSignUpSchema } from "../../../../commons/adminValidation/validation";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { useMutationCreateAdminister } from "../../../commons/hooks/mutations/useMutationCreateAdminister";
import * as S from "./adminSignup.style";

interface IFormData {
  name: string;
  password: string;
  email: string;
  confirmPw: string;
  phone: string;
}

export default function UserSignUpPage(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(adminSignUpSchema),
    mode: "onChange",
  });

  const [createAdminister] = useMutationCreateAdminister();

  const onClickSingUp = async (data: IFormData): Promise<void> => {
    try {
      await createAdminister({
        variables: {
          createAdministerInput: {
            administer_email: data.email,
            administer_name: data.name,
            administer_password: data.password,
            administer_phone: data.phone,
          },
        },
      });
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
    void router.push("/admin/login"); // 로그인이 된 상태로 로그인 페이지 이동함.
  };

  const onClickMoveLogin = (): void => {
    void router.push(`/admin/login`);
  };

  return (
    <>
      <S.Wrapper>
        <S.LogInWrapper>
          <S.LogInTitle>관리자이신가요?</S.LogInTitle>
          <S.LogInButton type="button" onClick={onClickMoveLogin}>
            LOGIN
          </S.LogInButton>
        </S.LogInWrapper>

        <S.SignUpWrapper>
          <S.SignUpWrapperContainer
            onSubmit={wrapFormAsync(handleSubmit(onClickSingUp))}
          >
            <S.SignUpTitle>SIGN UP</S.SignUpTitle>
            <S.InputContainer>
              <S.SignUpInputBox>
                <S.SignUpInputDetail>
                  <S.SignUpInputTitle>Name</S.SignUpInputTitle>

                  <S.SignUpInput
                    type="text"
                    {...register("name")}
                    placeholder="이름을 입력해주세요."
                  ></S.SignUpInput>
                </S.SignUpInputDetail>

                <S.ErrorMessage>
                  {formState.errors.name?.message}
                </S.ErrorMessage>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputDetail>
                  <S.TitleBox>
                    <S.SignUpInputTitle>Email</S.SignUpInputTitle>
                  </S.TitleBox>

                  <S.SignUpInputEmail
                    type="text"
                    {...register("email")}
                    placeholder="user@google.com"
                  ></S.SignUpInputEmail>
                  <S.PhoneButton type="button">CLICK</S.PhoneButton>
                </S.SignUpInputDetail>

                <S.ErrorMessage>
                  {formState.errors.email?.message}
                </S.ErrorMessage>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputDetail>
                  <S.TitleBox>
                    <S.SignUpInputTitle>Pass</S.SignUpInputTitle>
                  </S.TitleBox>

                  <S.SignUpInput
                    {...register("password")}
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  ></S.SignUpInput>
                </S.SignUpInputDetail>

                <S.ErrorMessage>
                  {formState.errors.password?.message}
                </S.ErrorMessage>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputDetail>
                  <S.TitleBox>
                    <S.SignUpInputTitle>Confirm</S.SignUpInputTitle>
                  </S.TitleBox>

                  <S.SignUpInput
                    {...register("confirmPw")}
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                  ></S.SignUpInput>
                </S.SignUpInputDetail>

                <S.ErrorMessage>
                  {formState.errors.confirmPw?.message}
                </S.ErrorMessage>
              </S.SignUpInputBox>

              <S.SignUpInputBox>
                <S.SignUpInputDetail>
                  <S.TitleBox>
                    <S.SignUpInputTitle>Phone</S.SignUpInputTitle>
                  </S.TitleBox>
                  <S.SignUpInput
                    {...register("phone")}
                    placeholder="010-1234-5678"
                  ></S.SignUpInput>
                </S.SignUpInputDetail>

                <S.ErrorMessage>
                  {formState.errors.phone?.message}
                </S.ErrorMessage>
              </S.SignUpInputBox>
            </S.InputContainer>
            <S.ButtonContainer>
              <S.BtnBox>
                <S.CancelButton type="button">CANCEL</S.CancelButton>
              </S.BtnBox>
              <S.BtnBox>
                <S.SignUpButton>SIGN UP</S.SignUpButton>
              </S.BtnBox>
            </S.ButtonContainer>
          </S.SignUpWrapperContainer>
        </S.SignUpWrapper>
      </S.Wrapper>
    </>
  );
}
