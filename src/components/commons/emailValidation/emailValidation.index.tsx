// 이메일 인증번호 보내주는 페이지(모달안에 들어갈 내용)

import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCheckVerificationCode } from "../hooks/mutations/useMutationCheckVerification";
import * as S from "./emailValidation.styles";

interface IFormValidationData {
  verificationCode: string;
}

export default function EmailValidationPage(props): JSX.Element {
  const [checkVerificationCode] = useMutationCheckVerificationCode();
  const { register, handleSubmit } = useForm<IFormValidationData>({
    // resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });
  const [seconds, setSeconds] = useState(180); // 인증시간 180초(3분)

  useEffect(() => {
    // 1초마다 타이머를 감소
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // 컴포넌트가 언마운트되거나 업데이트되기 전에 타이머를 정리
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // 타이머가 만료되면 알림을 표시하고 모달을 닫음
      Modal.error({
        content: "인증시간이 만료되었습니다. 인증을 다시 진행해주세요!",
      });
      props.handleCancel(); // src/components//user/
    }
  }, [seconds]);

  const onClickCheckVerification = async (
    data: IFormValidationData
  ): Promise<void> => {
    try {
      const checkVerificationResult = checkVerificationCode({
        variables: { verificationCode: data.verificationCode },
      });
      console.log(checkVerificationResult);
      console.log(data.verificationCode);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  // 남은 시간을 분과 초로 변환
  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <>
      <S.Wrapper>
        <S.Title>이메일 확인 후 인증번호를 입력해주세요.</S.Title>
        <S.ValidationWrapper>
          <S.Input
            placeholder="인증번호 입력"
            {...register("verificationCode")}
          />
          <S.Timer>{`${remainingMinutes}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`}</S.Timer>
        </S.ValidationWrapper>
        <S.DivideLine></S.DivideLine>
        <S.ErrorWrapper>
          <S.Error>인증번호가 다릅니다. 다시 진행해주세요!</S.Error>
        </S.ErrorWrapper>
        <S.BtnWrapper>
          <S.SubmitBtn
            type="button"
            onClick={wrapFormAsync(handleSubmit(onClickCheckVerification))}
          >
            확인
          </S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
