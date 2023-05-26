import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import * as S from "../src/commons/landingPageStyles/index";

export default function LandingPage(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
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

        <S.Third>
          <S.ThirdWrapper>
            <S.Top>
              <S.TopLeftImg data-aos="fade-in" data-aos-delay="300">
                <S.ThirdTopImg src="/cafeImg.jpeg"></S.ThirdTopImg>
              </S.TopLeftImg>
              <S.TopContentsWrapper data-aos="zoom-in" data-aos-delay="0">
                <S.TopRightContents1>
                  {`충전 한번이면 어디서나 사용 가능한 포인트!`}
                </S.TopRightContents1>
                <S.TopRightContents2>
                  {`비싼 시간제로 구매하긴 부담스럽고 다 쓸 수 있을지 애매할 때 
                  사용하고 싶은 만큼의 포인트만 결제할 수 있어요.
                  어디스카 포인트 한번 충전이면, 모든 스터디카페 이용이 가능합니다!
                `}
                </S.TopRightContents2>
              </S.TopContentsWrapper>
            </S.Top>
            <S.Bottom>
              <S.BottomContentsWrapper data-aos="zoom-in" data-aos-delay="0">
                <S.BottomLeftContents1>
                  {`스터디 카페 찾기, 어디스카에게 맡겨주세요.`}
                </S.BottomLeftContents1>
                <S.BottomLeftContents2>
                  {`이용하고싶은 지역을 검색하면 
                  주변 스터디카페의 위치, 실시간 좌석, 그리고 실제 이용자들의 리뷰를 
                  한번에 확인 가능합니다.
                  `}
                </S.BottomLeftContents2>
              </S.BottomContentsWrapper>

              <S.BottomRightImg data-aos="fade-in" data-aos-delay="0">
                <S.ThirdBottomImg src="/cafeImg.jpeg"></S.ThirdBottomImg>
              </S.BottomRightImg>
            </S.Bottom>
          </S.ThirdWrapper>
        </S.Third>

        <S.Fourth>
          <S.FourthTop>
            <S.TopTiTle>어디스카 어쩌구저쩌구</S.TopTiTle>
          </S.FourthTop>
          <S.FourthBottom>
            <S.FourthLeft>
              <S.GoAdminBtn>관리자페이지</S.GoAdminBtn>
            </S.FourthLeft>
            <S.FourthRight>
              <S.GoUserBtn>유저페이지</S.GoUserBtn>
            </S.FourthRight>
          </S.FourthBottom>
        </S.Fourth>
      </S.Wrapper>
    </>
  );
}
