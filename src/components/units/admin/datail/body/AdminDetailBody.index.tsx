import {
  Body,
  StyledSlider,
  SliderItem,
  ContentsBox,
  Contents,
  SeatComponent,
} from "./AdminDetailBody.styles";

export default function AdminDetailBody(props): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "100px",
  };

  return (
    <Body>
      <StyledSlider {...settings}>
        <div>
          <SliderItem
            src="/cafe1.png"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <SliderItem src="/cafe2.png" />
        </div>
        <div>
          <SliderItem src="/cafe3.png" />
        </div>
        <div>
          <SliderItem src="/cafe1.png" />
        </div>
        <div>
          <SliderItem src="/cafe2.png" />
        </div>
      </StyledSlider>
      <ContentsBox>
        <Contents>{props.cafeDescription}</Contents>
      </ContentsBox>
      <SeatComponent src="/seat.png"></SeatComponent>
    </Body>
  );
}
