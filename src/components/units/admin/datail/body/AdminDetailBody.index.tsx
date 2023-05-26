import { IImage } from "../../../../../commons/types/generated/types";
import SeatScanPage from "../../seat/seatScan/seatScan.Admin";
import {
  Body,
  StyledSlider,
  SliderItem,
  ContentsBox,
  Contents,
} from "./AdminDetailBody.styles";

interface IAdminDetailProps {
  cafeImages?: IImage[];
  cafeDescription: string;
}

export default function AdminDetailBody(props: IAdminDetailProps): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    arrow: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "100px",
  };

  const restImageUrls: string[] =
    props.cafeImages?.map((el) => el?.image_url ?? "") ?? [];

  return (
    <Body>
      <StyledSlider {...settings}>
        <div>
          <SliderItem
            src={restImageUrls[0]}
            style={{ width: "80%", height: "auto" }}
          />
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
        <div>
          <SliderItem src={restImageUrls[4]} />
        </div>
      </StyledSlider>
      <ContentsBox>
        <Contents>{props.cafeDescription}</Contents>
      </ContentsBox>
      <SeatScanPage></SeatScanPage>
    </Body>
  );
}
