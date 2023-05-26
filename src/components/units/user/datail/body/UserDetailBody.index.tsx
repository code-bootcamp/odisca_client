import { IImage } from "../../../../../commons/types/generated/types";
import SeatScanPage from "../../../admin/seat/seatScan/seatScan.User";
import * as S from "./UserDetailBody.styles";
import { StyledSlider, SliderItem } from "./UserDetailBody.styles";

interface IPropsUserDetailBody {
  cafeDescription: string;
  cafeOpenTime: string;
  cafeCloseTime: string;
  cafeContact: string;
  cafeAddress: string;
  cafeImages: IImage[];
}

export default function UserDetailBody(
  props: IPropsUserDetailBody
): JSX.Element {
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
        {props.cafeImages.map((el: IImage): JSX.Element => {
          return (
            <div key={el.image_id}>
              <SliderItem src={el.image_url ?? ""} />
            </div>
          );
        })}
      </StyledSlider>
      <S.ContentsBox>
        <S.Contents>{props.cafeDescription}</S.Contents>
      </S.ContentsBox>
      <S.InfoBox>
        <S.Box>
          <S.Title>
            <S.Icon src="/clock.png" />
            <S.Label>운영시간</S.Label>
          </S.Title>
          <S.DevidedLine></S.DevidedLine>
          <S.Detail>
            <S.Contents>
              {props.cafeOpenTime} - {props.cafeCloseTime}
            </S.Contents>
            {/* <S.Contents>공휴일 휴무</S.Contents> */}
          </S.Detail>
        </S.Box>
        <S.Box>
          <S.Title>
            <S.Icon src="/phone.png" />
            <S.Label>주소 및 연락처</S.Label>
          </S.Title>
          <S.DevidedLine></S.DevidedLine>
          <S.Detail>
            <S.Contents>{props.cafeAddress}</S.Contents>
            <S.Contents>{props.cafeContact}</S.Contents>
          </S.Detail>
        </S.Box>
      </S.InfoBox>
      <SeatScanPage></SeatScanPage>
    </S.Body>
  );
}
