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
      const result = await createAdminister({
        variables: {
          createAdministerInput: {
            email: data.email,
            name: data.name,
            password: data.password,
            phone: data.phone,
          },
        },
      });
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
    void router.push("/admin/login"); // 로그인이 된 상태로 로그인 페이지 이동함.
    console.log(data);
  };

  return (
    <>
      <S.Wrapper>
        <S.LogInWrapper>
          <S.LogInTitle>관리자이신가요?</S.LogInTitle>
          <S.LogInButton type="button">LOGIN</S.LogInButton>
        </S.LogInWrapper>
        <S.SignUpWrapper>
          <S.SignUpWrapperContainer
            onSubmit={wrapFormAsync(handleSubmit(onClickSingUp))}
          >
            <S.SignUpTitle>SIGN UP</S.SignUpTitle>
            <S.InputContainer>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>NAME</S.SignUpInputTitle>
                <S.SignUpInput
                  type="text"
                  {...register("name")}
                  placeholder="이름"
                ></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>EMAIL</S.SignUpInputTitle>
                <S.SignUpInput
                  type="text"
                  {...register("email")}
                  placeholder="user@google.com"
                ></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PASS</S.SignUpInputTitle>
                <S.SignUpInput
                  {...register("password")}
                  type="password"
                ></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PASS</S.SignUpInputTitle>
                <S.SignUpInput
                  {...register("confirmPw")}
                  type="password"
                ></S.SignUpInput>
              </S.SignUpInputBox>
              <S.ErrorMessage>
                {formState.errors.confirmPw?.message}
              </S.ErrorMessage>
              <S.SignUpInputBox>
                <S.SignUpInputTitle>PHONE</S.SignUpInputTitle>
                <S.SignUpInputPhone
                  {...register("phone")}
                  placeholder="010-1234-5678"
                ></S.SignUpInputPhone>
                <S.PhoneButton type="button">CLICK</S.PhoneButton>
              </S.SignUpInputBox>
              <S.ErrorMessage>{formState.errors.phone?.message}</S.ErrorMessage>
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
