// import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchOneStudyCafeForUserArgs,
} from "../../../../../../../commons/types/generated/types";
import { FETCH_ONE_STUDY_CAFE } from "../../../../../../commons/hooks/queries/useQueryFetchStudyCafeForUser";
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
  const infoWindows = [];
  const router = useRouter();

  const handleClick = (cafeId: string) => {
    const lat = props.el.studyCafe_lat;
    const lon = props.el.studyCafe_lon;

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

      const positions = {
        content:
          '<div class="wrap">' +
          '    <div class="info" style="padding:10px" id=image>' +
          '        <div class="title" style="display: flex; flex-direction: row; justify-content: space-between; align-items:center;">' +
          `<div style="font-size:20px;">${props.el.studyCafe_name}</div>` +
          '            <div style="cursor:pointer; padding:10px" id="closeBtn">X</div>' +
          "        </div>" +
          '        <div class="body" style="display:flex;">' +
          '            <div class="img">' +
          '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70" id="image" style="cursor:pointer;">' +
          "           </div>" +
          '            <div class="desc" style="margin-left:10px;">' +
          `                <div class="ellipsis">${props.el.studyCafe_address} ${props.el.studyCafe_addressDetail}</div>` +
          "            </div>" +
          "        </div>" +
          "    </div>" +
          "</div>",
        latlng: new window.kakao.maps.LatLng(lat, lon),
      };

      const infowindow = new window.kakao.maps.InfoWindow({
        content: positions.content,
      });

      infoWindows.push(infowindow);

      window.kakao.maps.event.addListener(marker, "click", function () {
        closeAllInfoWindows();
        infowindow.setContent(positions.content);
        infowindow.open(map, marker);
      });

      document.addEventListener("click", function (event) {
        const target = event.target as HTMLElement;
        if (target.matches("#closeBtn")) {
          infowindow.close();
        }
      });

      document.addEventListener("click", function (event) {
        const target = event.target as HTMLElement;
        if (target.matches("#image")) {
          console.log(cafeId, "dddd");
          void router.push(`/user/${event.currentTarget.id}`);
        }
      });
      const closeAllInfoWindows = (): void => {
        infoWindows.forEach((infowindow) => {
          infowindow.close();
        });
      };
    });
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
