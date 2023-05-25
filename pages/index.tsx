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
        <S.Second>
          <S.SecondWrapper>
            <S.TitleWrapper>
              <S.SecondTitle1>1초가 아까운 시험기간,</S.SecondTitle1>
              <S.SecondTitle1>오랜시간 줄서서 기다리지 마세요.</S.SecondTitle1>
              <S.SecondTitle2>
                시험기간, 스터디 카페 자리가 없어 발길을 돌리신 적 있으신가요?
              </S.SecondTitle2>
              <S.SecondTitle2>
                어디스카에서는 실시간으로 좌석 조회 및 예약까지 가능합니다.
              </S.SecondTitle2>
              <S.SecondTitle2>
                내가 원하는 좌석, 어디스카에서 미리 구매하세요!
              </S.SecondTitle2>
            </S.TitleWrapper>

            <S.SecondImg></S.SecondImg>
          </S.SecondWrapper>
        </S.Second>
        <S.Third></S.Third>
        <S.Fourth></S.Fourth>
      </S.Wrapper>
    </>
  );
}
