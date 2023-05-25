import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryFetchAllStudyCafes } from "../queries/useQueryFetchAllStudyCafes";
import { MapCenterUpdater } from "./useEffectMapCenter";

declare const window: typeof globalThis & {
  kakao: any;
};

interface Props {
  selectedDistrict: string;
}

export default function Map({ selectedDistrict }: Props): JSX.Element {
  const router = useRouter();
  const infoWindows = [];

  const [map, setMap] = useState(null);
  const { data } = useQueryFetchAllStudyCafes({
    studyCafe_city: "서울",
    studyCafe_district: selectedDistrict,
    page: 1,
  });

  // const cafes = data?.fetchAllStudyCafes;
  // const LatLon = data?.fetchAllStudyCafes.map((el) => {
  //   return [el.studyCafe_lat, el.studyCafe_lon];
  // });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=12e2554bb6ebf42463e132c31315b011&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.514575, 127.0495556),
          level: 3,
        });
        setMap(map);
      });
    };
  }, []);

  useEffect(() => {
    console.log("ggggg");
    console.log(window.kakao);
    if (!data || !map) return;

    data?.fetchAllStudyCafes.forEach((el: any, index: number) => {
      console.log(el.studyCafe_lat, el.studyCafe_lon, "ddddddddd");
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          el.studyCafe_lon,
          el.studyCafe_lat
        ),
      });
      marker.setMap(map);

      const url = String(el?.images[0]?.image_url ?? "/ready.png");
      console.log(url, "url");
      const positions = [
        {
          content:
            '<div class="wrap">' +
            '    <div class="info" style="padding:10px;">' +
            '        <div class="title" style="display: flex; flex-direction: row; justify-content: space-between; align-items:center;">' +
            '<div style="font-size:20px;">' +
            String(el?.studyCafe_name) +
            "</div>" +
            `            <div style="cursor:pointer; padding:10px" id="closeBtn${index}">X</div>` +
            "        </div>" +
            '        <div class="body" style="display:flex; flex-direction:row;">' +
            '            <div class="img">' +
            '<img src="' +
            url +
            `" width="73" height="70" id="image${index}" style="cursor:pointer;">` +
            "</img>" +
            '            <div class="desc" style="margin-left:10px;">' +
            '                <div class="ellipsis">' +
            String(el?.studyCafe_address) +
            " " +
            String(el?.studyCafe_addressDetail) +
            "</div>" +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>",
          latlng: new window.kakao.maps.LatLng(
            el.studyCafe_lon,
            el.studyCafe_lat
          ),
        },
      ];
      const infowindow = new window.kakao.maps.InfoWindow({
        content: positions[0].content,
      });
      infoWindows.push(infowindow);
      window.kakao.maps.event.addListener(marker, "click", function () {
        closeAllInfoWindows();
        infowindow.setContent(positions[0].content);
        infowindow.open(map, marker);
      });
      document.addEventListener("click", function (event) {
        const target = event.target as HTMLElement;
        if (target.matches(`#closeBtn${index}`)) {
          infowindow.close();
        }
      });
      document.addEventListener("click", function (event) {
        const target = event.target as HTMLElement;
        if (target.matches(`#image${index}`)) {
          void router.push(`/user/${el?.studyCafe_id}`);
        }
      });
      const closeAllInfoWindows = (): void => {
        infoWindows.forEach((infowindow) => {
          infowindow.close();
        });
      };
    });
  }, [data, map]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      {map !== undefined && (
        <MapCenterUpdater map={map} selectedDistrict={selectedDistrict} />
      )}
    </>
  );
}
