import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import "aos/dist/aos.css";

export const Wrapper = styled.div``;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: -30px;
`;

// ====== 첫번째 랜딩페이지 ====== //
export const First = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #40e0d0;
`;

export const FirstTitleWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 60px;
  position: relative;
`;

export const FirstTitle1 = styled.h1`
  color: #fff;
  font-size: 35px;
  margin-right: 500px;
`;

export const FirstTitle2 = styled.p`
  color: #fff;
  font-weight: 800;
  font-size: 125px;
  position: absolute;
  z-index: 2;
  top: 55px;
`;

export const FirstImg = styled.img`
  background-color: #4f4f4f;
  opacity: 1;
  width: 600px;
  height: 600px;
  position: absolute;
  z-index: 1;
  top: 130px;
  animation: ${keyframes`
  0% {
      opacity: 0;
      transform: translateY(0);
    }
    25% {
      opacity: 1;
      transform: translateY(-50px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    75% {
      opacity: 1;
      transform: translateY(-25px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `} 1.8s ease-in-out;
`;

// ====== 두번째 랜딩페이지 ====== //

export const Second = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export const Third = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #40e0d0;
`;

export const Fourth = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
