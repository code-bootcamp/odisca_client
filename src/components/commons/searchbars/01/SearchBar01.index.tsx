import { useState } from "react";
import { Select } from "antd";
import * as S from "./SearchBar.styles";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  kakao: any;
};

type CityData = Record<string, string[]>;

const provinceData = ["서울"];
// prettier-ignore
const cityData:CityData = {
  서울: [
    "강남구", "강동구","강북구","강서구","관악구","광진구","구로구","금천구",
    "노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구",
    "성북구", "송파구","양천구", "영등포구","용산구","은평구", "종로구","중구","중랑구",
  ],
};

const cafeDatas = [
  { district: "강남구", lon: 127.0495556, lat: 37.514575 },
  { district: "구로구", lon: 126.8895972, lat: 37.49265 },
  { district: "노원구", lon: 127.0583889, lat: 37.65146111 },
  { district: "동대문구", lon: 127.0421417, lat: 37.571625 },
  { district: "마포구", lon: 126.9105306, lat: 37.50965556 },
];

export default function SearchBar01(): JSX.Element {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const router = useRouter();

  const handleProvinceChange = (value: string): void => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: string): void => {
    setSecondCity(value);
    const selectedCafe = cafeDatas.find((city) => city.district === value);
    if (selectedCafe !== undefined) {
      const { lat, lon } = selectedCafe;
      const locPosition = new window.kakao.maps.LatLng(lat, lon);
      if (window.kakao.maps.Map !== undefined) {
        const map = new window.kakao.maps.Map(document.getElementById("map"), {
          center: locPosition,
          level: 3,
        });
        map.panTo(locPosition);

        const positions = cafeDatas
          .filter((cafe) => cafe.district === value)
          .map((cafe) => ({
            content:
              '<div class="wrap">' +
              '    <div class="info" style="padding:10px">' +
              '        <div class="title" style="display: flex; flex-direction: row; justify-content: space-between; align-items:center;">' +
              '<div style="font-size:20px;">어디스카페</div>' +
              '            <div style="cursor:pointer; padding:10px" id="closeBtn">X</div>' +
              "        </div>" +
              '        <div class="body" style="display:flex;">' +
              '            <div class="img">' +
              '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70" id="image" style="cursor:pointer;">' +
              "           </div>" +
              '            <div class="desc" style="margin-left:10px;">' +
              '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
              "            </div>" +
              "        </div>" +
              "    </div>" +
              "</div>",
            latlng: new window.kakao.maps.LatLng(cafe.lat, cafe.lon),
          }));
        // prettier-ignore
        for (let i = 0; i < positions.length; i++) {
          const marker = new window.kakao.maps.Marker({
            map, 
            position: positions[i].latlng, 
          });
          const infowindow = new window.kakao.maps.InfoWindow({
            content: positions[i].content, 
          });

          window.kakao.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(positions[i].content);
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
            void  router.push(`/user/login`)
            }
          });


        }
      }
    }
  };

  return (
    <>
      <S.SearchBar>
        <Select
          defaultValue={provinceData[0]}
          style={{ marginRight: "10px" }}
          onChange={handleProvinceChange}
          options={provinceData.map((province) => ({
            label: province,
            value: province,
          }))}
        />
        <Select
          style={{ width: "80px" }}
          value={secondCity}
          onChange={onSecondCityChange}
          options={cities.map((city) => ({ label: city, value: city }))}
        />
      </S.SearchBar>
    </>
  );
}
