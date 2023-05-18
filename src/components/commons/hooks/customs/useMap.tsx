import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function Map(): JSX.Element {
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

        // HTML5의 geolocation으로 사용할 수 있는지 확인.
        if (navigator.geolocation !== undefined) {
          // GeoLocation을 이용해서 접속 위치를 얻어온다.
          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            const locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
            const message =
              '<div style=width:150px;text-align:center;padding:3px;font-size:30px;">내 위치</div>';
            // 마커와 인포윈도우를 표시
            displayMarker(locPosition, message);
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
          const locPosition = new window.kakao.maps.LatLng(
            33.450701,
            126.570667
          );
          const message = "geolocation을 사용할 수 없는 환경입니다";
          console.log(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수
        function displayMarker(locPosition: any, message: string): void {
          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: locPosition,
            map: map,
          });
          // 인포윈도우에 표시할 내용
          const content = message;
          const isRemoveable = true;
          // 인포윈도우를 생성
          const infowindow = new window.kakao.maps.InfoWindow({
            content: content,
            removable: isRemoveable,
          });
          infowindow.open(map, marker);
          map.setCenter(locPosition);
        }
      });
    };
  }, []);
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
