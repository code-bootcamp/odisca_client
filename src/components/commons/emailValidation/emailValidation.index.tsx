// 이메일 인증번호 보내주는 페이지(모달안에 들어갈 내용)
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCheckVerificationCode } from "../hooks/mutations/useMutationCheckVerification";
import * as S from "./emailValidation.styles";
import UseModal from "../hooks/customs/useModal";

interface IFormValidationData {
  verificationCode: string;
}
interface IEmailValidationProps {
  handleCancel: () => void;
}

export default function EmailValidationPage(
  props: IEmailValidationProps
): JSX.Element {
  const [checkVerificationCode] = useMutationCheckVerificationCode();
  const { register, handleSubmit } = useForm<IFormValidationData>({
    mode: "onChange",
  });
  const [seconds, setSeconds] = useState(180);
  const { handleCancel } = UseModal();

  useEffect(() => {
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
      Modal.error({
        content: "인증시간이 만료되었습니다. 인증을 다시 진행해주세요!",
      });
      handleCancel();
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
      props.handleCancel();
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "인증실패",
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
            onClick={wrapAsync(handleSubmit(onClickCheckVerification))}
          >
            확인
          </S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
