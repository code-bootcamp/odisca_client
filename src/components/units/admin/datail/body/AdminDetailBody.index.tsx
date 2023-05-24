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

  // 메인이미지 url을 mainImageUrl에 담기
  const mainImageUrl = props.cafeImage.find(
    (el) => el.image_isMain === true
  )?.image_url;

  // 메인이미지를 제외한 이미지들을 restImageUrl 배열에 담기
  const restImageData = props.cafeImage.filter(
    (el) => el.image.isMain !== true
  );

  const restImageUrl = restImageData.map((el) => el.image_url);

  props.cafeImage.return(
    <Body>
      <StyledSlider {...settings}>
        <div>
          <SliderItem
            // src="/cafe1.png"
            src={mainImageUrl}
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <SliderItem src={restImageUrl[0]} />
        </div>
        <div>
          <SliderItem src={restImageUrl[1]} />
        </div>
        <div>
          <SliderItem src={restImageUrl[2]} />
        </div>
        <div>
          <SliderItem src={restImageUrl[3]} />
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
