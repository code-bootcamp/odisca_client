// import { useEffect } from "react";
import { useEffect } from "react";
import * as S from "./CafeListItem.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

interface CafeListItemProps {
  el: {
    studyCafe_id: string;
    studyCafe_name: string;
    studyCafe_timeFee: string;
    studyCafe_description: string;
    studyCafe_lat: GLfloat;
    studyCafe_lon: GLfloat;
    image?: {
      image_url: string;
    };
  };
}

export default function CafeListItem(props: CafeListItemProps): JSX.Element {
  const cafeId = props.el.studyCafe_id;

  const handleClick = () => {
    const lat = props.el.studyCafe_lat;
    const lon = props.el.studyCafe_lon;

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=12e2554bb6ebf42463e132c31315b011&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(lat, lon),
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lon),
        });

        marker.setMap(map);
      });
    };
  };

  return (
    <S.Wrapper>
      <S.ListBox key={cafeId}>
        <S.CafeBox onClick={handleClick} id={cafeId}>
          <S.CafeName>{props.el.studyCafe_name}</S.CafeName>
          <S.CafeList>
            <S.CafeImg
              src={
                props.el.image?.image_url !== undefined
                  ? `https://storage.googleapis.com/${props.el.image.image_url}`
                  : "/ready.png"
              }
            />
            <S.CafeInfo>
              <S.PriceImg src="/user/main/price.png" />
              <S.Price>1시간</S.Price>
              <S.Price>{props.el.studyCafe_timeFee}원</S.Price>
            </S.CafeInfo>
            <S.CafeDetail>{props.el.studyCafe_description}</S.CafeDetail>
            <S.CafeReview>
              여기 깔끔하고 집중 잘돼요. 백색소음 때문인가ㅎ
            </S.CafeReview>
          </S.CafeList>
        </S.CafeBox>
        <S.DevidedLine></S.DevidedLine>
      </S.ListBox>
    </S.Wrapper>
  );
}
