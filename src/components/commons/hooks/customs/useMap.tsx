import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStudyCafe } from "../../../../commons/types/generated/types";
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
  const [map, setMap] = useState(null);
  const { data } = useQueryFetchAllStudyCafes({
    studyCafe_city: "서울",
    studyCafe_district: selectedDistrict,
    page: 1,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6583c79fd8fd9f0d519f6b325b841c09&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.514575, 127.0495556),
          level: 3,
        });
        setMap(map);
      });
    };
  }, []);
  // marker와 infowindow 표시
  useEffect(() => {
    if (data === undefined || map === null) return;

    const infoWindows: any = [];

    data?.fetchAllStudyCafes.forEach((el: IStudyCafe, index: number) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          el.studyCafe_lat,
          el.studyCafe_lon
        ),
      });
      marker.setMap(map);

      const url = String(el?.images[0]?.image_url ?? "/ready.png");
      // infowindow에 들어갈 내용
      const positions = [
        {
          content:
            '<div class="wrap" style="width:250px; height:120px;  ">' +
            '    <div class="info">' +
            '        <div class="title" style="display: flex; flex-direction: row; justify-content: space-between; align-items:center; margin-top:15px;">' +
            '<div style="font-size:16px; margin-left:20px;">' +
            String(el?.studyCafe_name) +
            "</div>" +
            `            <div style="cursor:pointer; margin-right:20px;" id="closeBtn${
              String(el.studyCafe_name) + String(index)
            }">X</div>` +
            "        </div>" +
            '        <div class="body">' +
            '            <div class="img" style="display:flex; align-items : flex-start; justify-content: flex-start; margin-top:15px;">' +
            '<img src="' +
            url +
            `" width="73" height="70" id="image${
              String(el.studyCafe_name) + String(index)
            }" style="cursor:pointer; margin-left:20px;">` +
            "</img>" +
            '                <div class="ellipsis" style="font-size:10px; margin-left:15px;">' +
            String(el?.studyCafe_address) +
            " " +
            String(el?.studyCafe_addressDetail) +
            "</div>" +
            "        </div>" +
            "    </div>" +
            "</div>",
          latlng: new window.kakao.maps.LatLng(
            el.studyCafe_lat,
            el.studyCafe_lon
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
        if (
          target.matches(
            `#closeBtn${String(el.studyCafe_name) + String(index)}`
          )
        ) {
          infowindow.close();
        }
      });
      document.addEventListener("click", function (event) {
        const target = event.target as HTMLElement;
        if (
          target.matches(`#image${String(el.studyCafe_name) + String(index)}`)
        ) {
          void router.push(`/user/${el?.studyCafe_id}`);
        }
      });
      // infowindow 닫기
      const closeAllInfoWindows = (): void => {
        infoWindows.forEach((infowindow: any) => {
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
