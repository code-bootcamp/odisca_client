import SeatScanPage from "../../seat/seatScan/seatScan.Admin";
import {
  Body,
  StyledSlider,
  SliderItem,
  ContentsBox,
  Contents,
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

  // const restImageUrl = restImageData.map((el) => el.image_url);

  let restImageUrls = [];
  if (props.cafeImages !== undefined) {
    restImageUrls = props.cafeImages.map((el) => el.image_url);
  }

  return (
    <Body>
      <StyledSlider {...settings}>
        <div>
          <SliderItem
            // src="/cafe1.png"
            src={props.MaincafeImageUrl}
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <SliderItem src={restImageUrls[0]} />
        </div>
        <div>
          <SliderItem src={restImageUrls[1]} />
        </div>
        <div>
          <SliderItem src={restImageUrls[2]} />
        </div>
        <div>
          <SliderItem src={restImageUrls[3]} />
        </div>
      </StyledSlider>
      <ContentsBox>
        <Contents>{props.cafeDescription}</Contents>
      </ContentsBox>
      <SeatScanPage></SeatScanPage>
      {/* <SeatComponent src="/seat.png"></SeatComponent> */}
    </Body>
  );
}
