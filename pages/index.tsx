import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Carousel from "../src/commons/landingPageStyles/carousel";
import * as S from "../src/commons/landingPageStyles/index";

export default function LandingPage(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
    AOS.refresh();
  });

  return (
    <>
      <S.Wrapper>
        <S.First>
          <S.FirstTitleWrapper>
            <S.FirstTitle1 data-aos="fade-down">
              내 주변 스터디카페,
            </S.FirstTitle1>
            <S.FirstTitle2 data-aos="fade-up" data-aos-delay="300">
              어디스카?
            </S.FirstTitle2>
            <S.FirstImg src="/landing_1.svg"></S.FirstImg>
          </S.FirstTitleWrapper>
        </S.First>

        <S.Second>
          <S.SecondWrapper>
            <S.TitleWrapper data-aos="fade-right">
              <S.SecondTitle1>
                {`1초가 아까운 시험기간,
                줄서지 말고 미리 예약하세요.`}
              </S.SecondTitle1>

              <S.SecondTitle2>
                {`시험기간, 스터디 카페 자리가 없어 발길을 돌리신 적 있으신가요?
                  어디스카에서는 실시간으로 좌석 조회 및 예약까지 가능합니다.
                  내가 원하는 좌석, 어디스카에서 미리 구매하세요!
                `}
              </S.SecondTitle2>
            </S.TitleWrapper>
            <S.SecondImgWrapper data-aos="fade-left">
              <S.SecondImg src="/landing_2.svg"></S.SecondImg>
            </S.SecondImgWrapper>
          </S.SecondWrapper>
        </S.Second>
        <S.Third></S.Third>
        <S.Fourth></S.Fourth>
      </S.Wrapper>
    </>
  );
}
