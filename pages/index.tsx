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
          <S.Logo src="/logo_2.png" />
          <S.FirstTitleWrapper>
            <S.FirstTitle1 data-aos="fade-down">
              내 주변 스터디카페,
            </S.FirstTitle1>
            <S.FirstTitle2 data-aos="fade-up" data-aos-delay="300">
              어디스카?
            </S.FirstTitle2>
            <S.FirstImg></S.FirstImg>
          </S.FirstTitleWrapper>
          {/* <Carousel /> */}
        </S.First>
        <S.Second></S.Second>
        <S.Third></S.Third>
        <S.Fourth></S.Fourth>
      </S.Wrapper>
    </>
  );
}
