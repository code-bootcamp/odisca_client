// 메인페이지

import styled from "@emotion/styled";
import { useEffect } from "react";
import SearchBar01 from "../../../commons/searchbars/01/SearchBar01.index";
import CafeList from "./cafelist/CafeList.index";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
`;

const Map = styled.div`
  width: 1420px;
  height: 100%;
`;

export default function UserMain(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=12e2554bb6ebf42463e132c31315b011&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 마커가 표시될 위치
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <Wrapper>
      <CafeList />
      <Map id="map"></Map>
      <SearchBar01 />
    </Wrapper>
  );
}
