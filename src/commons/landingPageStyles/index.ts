import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import "aos/dist/aos.css";
import { mediaQueries } from "../../components/commons/media/mediaQueries";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
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
  ${mediaQueries("macBook")} {
    left: 15vw;
  }
`;

export const SecondTitle1 = styled.h1`
  color: #fff;
  font-size: 40px;
  width: 100vw;
  white-space: pre-line;
  margin-bottom: 3vh;
  ${mediaQueries("macBook")} {
    font-size: 33px;
  }
`;

export const SecondTitle2 = styled.p`
  color: #fff;
  font-size: 20px;
  width: 100vw;
  white-space: pre-line;
  ${mediaQueries("macBook")} {
    font-size: 19px;
  }
`;

export const SecondImgWrapper = styled.div`
  position: absolute;
  left: 43vw;
  z-index: 2;
`;

export const SecondImg = styled.img`
  width: 700px;
  height: 700px;
  background-color: #bdbdbd;
  ${mediaQueries("macBook")} {
    width: 600px;
    height: 600px;
  }
`;

// ====== 세번째 랜딩페이지 ====== //

export const Third = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #40e0d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ThirdWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  z-index: 0;
  position: relative;
`;

export const Top = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
`;

export const TopLeftImg = styled.div`
  width: 50%;
  height: 50vh;
`;

export const ThirdTopImg = styled.img`
  width: 100%;
  height: 50vh;
  opacity: 1;
  margin-top: 30px;
`;

export const TopContentsWrapper = styled.div`
  padding-top: 17vh;
  padding-left: 2vw;
  width: 50%;
  ${mediaQueries("macBook")} {
    padding-top: 15vh;
  }
`;

export const TopRightContents1 = styled.h1`
  font-size: 40px;

  color: #fff;
  margin-bottom: 3vh;
  ${mediaQueries("macBook")} {
    font-size: 31px;
  }
`;

export const TopRightContents2 = styled.div`
  white-space: pre-line;
  font-size: 20px;
  color: #fff;
  ${mediaQueries("macBook")} {
    font-size: 19px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
`;

export const BottomContentsWrapper = styled.div`
  padding-top: 17vh;
  padding-left: 2vw;
  width: 50%;
  ${mediaQueries("macBook")} {
    padding-top: 15vh;
  }
`;

export const BottomLeftContents1 = styled.h1`
  font-size: 40px;
  color: #fff;
  white-space: pre-line;
  margin-bottom: 3vh;
  ${mediaQueries("macBook")} {
    font-size: 31px;
  }
`;

export const BottomLeftContents2 = styled.div`
  font-size: 20px;
  color: #fff;
  white-space: pre-line;
  ${mediaQueries("macBook")} {
    font-size: 19px;
  }
`;

export const BottomRightImg = styled.div`
  width: 50%;
`;

export const ThirdBottomImg = styled.img`
  width: 100%;
  height: 50vh;
  opacity: 1;
`;

// ====== 네번째 랜딩페이지 ====== //

export const Fourth = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4f4f4f;
`;

export const FourthLeftWrapper = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #fff;
  }
  transition: 0.4s ease-in-out;
`;

export const FourthLeftImg = styled.img`
  position: absolute;
  width: 35vw;
  height: 65vh;
`;

export const FourthWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FourthRightWrapper = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #fff;
  }
  transition: 0.4s ease-in-out;
`;

export const FourthRightImg = styled.img`
  width: 35vw;
  height: 65vh;
  position: absolute;
  left: 6vw;
`;

export const GoAdminBtn = styled.button`
  width: 180px;
  height: 50px;
  background-color: #4f4f4f;
  border: 1px solid #40e0d0;
  color: #40e0d0;
  border-radius: 30px;
  font-size: 23px;
  font-weight: 500;
  position: absolute;
  top: 90vh;
  cursor: pointer;
`;

export const GoUserBtn = styled.button`
  width: 180px;
  height: 50px;
  background-color: #40e0d0;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-size: 23px;
  font-weight: 500;
  position: absolute;
  top: 90vh;
  cursor: pointer;
`;

// ====== footer ====== //

export const Footer = styled.div`
  width: 100vw;
  height: 35vh;
  background-color: #4f4f4f;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin: 0;
  /* background-color: pink; */
`;

export const Logo = styled.img`
  width: 300px;
  height: 200px;
  margin-top: 3vh;
`;

export const AddressWrapper = styled.div`
  width: 10vw;
  border-top: 1px solid #fff;
`;

export const Address = styled.div`
  color: #fff;
  margin-top: 3vh;
  margin-bottom: 4vh;
`;

export const AddressContent = styled.div`
  color: #fff;
  font-size: 15px;
  white-space: pre-line;
`;

export const ContactWrapper = styled.div`
  width: 10vw;
  border-top: 1px solid #fff;
`;

export const Contact = styled.div`
  color: #fff;
  margin-top: 3vh;
  margin-bottom: 4vh;
`;

export const ContactContent = styled.div`
  color: #fff;
  white-space: pre-line;
  font-size: 15px;
`;

export const InfoUsWrapper = styled.div`
  width: 10vw;
  border-top: 1px solid #fff;
`;

export const InfoUs = styled.div`
  color: #fff;
  margin-top: 3vh;
  margin-bottom: 4vh;
`;

export const InfoUsContent = styled.div`
  color: #fff;
  font-size: 15px;
`;
