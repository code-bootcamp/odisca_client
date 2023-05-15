import { StyledSlider, img } from "./UserDetailBody.styles";
import * as S from "./UserDetailBody.styles";
export default function UserDetailBody(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <S.Body>
      <StyledSlider {...settings}>
        <div>
          <img src="/cafe1.png" />
        </div>
        <div>
          <img src="/cafe2.png" />
        </div>
        <div>
          <img src="/cafe3.png" />
        </div>
        <div>
          <img src="/cafe1.png" />
        </div>
        <div>
          <img src="/cafe2.png" />
        </div>
      </StyledSlider>
      <S.ContentsBox>
        <S.Contents>
          우리카페는 과자공짜 우리카페는 과자공짜 우리카페는 과자공짜 우리카페는
          과자공짜 우리카페는 과자공짜 우리카페는 과자공짜 우리카페는 과자공짜
          우리카페는 과자공짜 우리카페는 과자공짜 우리카페는 과자공짜
        </S.Contents>
      </S.ContentsBox>
      <S.InfoBox>
        <S.Box>
          <S.Title>
            <S.Icon src="/clock.png" />
            <S.Label>운영시간</S.Label>
          </S.Title>
          <S.DevidedLine></S.DevidedLine>
          <S.Detail>
            <S.Contents>매일 07:00 - 23:00</S.Contents>
            <S.Contents>공휴일 휴무</S.Contents>
          </S.Detail>
        </S.Box>
        <S.Box>
          <S.Title>
            <S.Icon src="/phone.png" />
            <S.Label>주소 및 연락처</S.Label>
          </S.Title>
          <S.DevidedLine></S.DevidedLine>
          <S.Detail>
            <S.Contents>서울특별시 구로구 구로구 디지털로 300</S.Contents>
            <S.Contents>02) 2000-2000</S.Contents>
          </S.Detail>
        </S.Box>
      </S.InfoBox>
    </S.Body>
  );
}
