import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import "aos/dist/aos.css";
import { mediaQueries } from "../../components/commons/media/mediaQueries";

export const Wrapper = styled.div`
  width: 100vw;
  /* height: 500vh; */
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -30px;
`;

// ====== 첫번째 랜딩페이지 ====== //
export const FirstWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const First = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #40e0d0;
  display: flex;
  position: relative;
`;

export const FirstTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 100px;
`;

export const FirstTitle1 = styled.h1`
  color: #fff;
  font-size: 35px;
  margin-right: 25vw;
  position: absolute;
  top: 6vh;

  ${mediaQueries("macBook")} {
    font-size: 30px;
    margin-right: 20vw;
  }
`;

export const FirstTitle2 = styled.p`
  color: #fff;
  font-weight: 800;
  font-size: 125px;
  position: absolute;
  display: flex;
  top: 12vh;

  ${mediaQueries("macBook")} {
    font-size: 100px;
    top: 13vh;
  }
`;

export const FirstImg = styled.img`
  opacity: 1;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 31vh;
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

  ${mediaQueries("macBook")} {
    width: 450px;
    height: 450px;
    top: 65vh;
    transform: translateY(-50%);
    animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 2s ease-in-out;
  }
`;

// ====== 두번째 랜딩페이지 ====== //

export const Second = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const SecondWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-color: #4f4f4f;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: 20vw;
  top: 30vh;
  z-index: 3;
`;

export const SecondTitle1 = styled.h1`
  color: #fff;
  font-size: 40px;
  width: 100vw;
  white-space: pre-line;
  margin-bottom: 3vh;
`;

export const SecondTitle2 = styled.p`
  color: #fff;
  font-size: 20px;
  width: 100vw;
  white-space: pre-line;
`;

export const SecondImgWrapper = styled.div`
  position: absolute;
  left: 800px;
  z-index: 2;
`;

export const SecondImg = styled.img`
  width: 700px;
  height: 700px;
  background-color: #bdbdbd;
`;

// ====== 세번째 랜딩페이지 ====== //

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
