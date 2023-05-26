import { IImage } from "../../../../../commons/types/generated/types";
import SeatScanPage from "../../seat/seatScan/seatScan.Admin";
import {
  Body,
  StyledSlider,
  SliderItem,
  ContentsBox,
  Contents,
} from "./AdminDetailBody.styles";
import { v4 as uuidv4 } from "uuid";

interface IAdminDetailProps {
  cafeImages?: IImage[];
  cafeDescription: string;
}

export default function AdminDetailBody(props: IAdminDetailProps): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    arrow: true,
    pauseOnHover: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
  };

  // const restImageUrls: string[] =
  //   props.cafeImages?.map((el) => el?.image_url ?? "") ?? [];
  const countArray = new Array(2 * Number(props.cafeImages?.length)).fill(0);

  return (
    <Body>
      <StyledSlider {...settings}>
        {countArray.map(
          (_, index: number): JSX.Element => (
            <div key={uuidv4()}>
              <SliderItem
                src={
                  props.cafeImages?.[index % Number(props.cafeImages?.length)]
                    .image_url ?? ""
                }
              />
            </div>
          )
        )}
      </StyledSlider>

      <ContentsBox>
        <Contents>{props.cafeDescription}</Contents>
      </ContentsBox>
      <SeatScanPage></SeatScanPage>
    </Body>
  );
}
