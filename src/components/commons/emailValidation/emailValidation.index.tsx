// 이메일 인증번호 보내주는 페이지(모달안에 들어갈 내용)

import { useEffect, useState } from "react";
import * as S from "./emailValidation.styles";

export default function EmailValidationPage(): JSX.Element {
  const [seconds, setSeconds] = useState(180); // 초기 값으로 180초(3분)를 설정

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

  // 남은 시간을 분과 초로 변환
  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <>
      <S.Wrapper>
        <S.Title>이메일 확인 후 인증번호를 입력해주세요.</S.Title>
        <S.ValidationWrapper>
          <S.Input placeholder="인증번호 입력"></S.Input>
          <S.Timer>{`${remainingMinutes}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`}</S.Timer>
        </S.ValidationWrapper>
        <S.DivideLine></S.DivideLine>
        <S.ErrorWrapper>
          <S.Error>인증번호가 다릅니다. 다시 진행해주세요!</S.Error>
        </S.ErrorWrapper>
        <S.BtnWrapper>
          <S.SubmitBtn type="button">확인</S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
