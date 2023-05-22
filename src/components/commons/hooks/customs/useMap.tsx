import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function Map(): JSX.Element {
  const router = useRouter();
  const infoWindows = [];

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
          center: new window.kakao.maps.LatLng(37.514575, 127.0495556), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);
        const positions = [
          {
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
            latlng: new window.kakao.maps.LatLng(
              37.5178135473914,
              127.04128186524144
            ),
          },
          {
            content: "<div>생태연못</div>",
            latlng: new window.kakao.maps.LatLng(
              37.51293439357456,
              127.05310473668925
            ),
          },
          {
            content: "<div>텃밭</div>",
            latlng: new window.kakao.maps.LatLng(
              37.51762206429312,
              127.04733913230727
            ),
          },
          {
            content: "<div>근린공원</div>",
            latlng: new window.kakao.maps.LatLng(
              37.51429768317861,
              127.04652828748588
            ),
          },
        ];

        // prettier-ignore
        for (let i = 0; i < positions.length; i++) {
          const marker = new window.kakao.maps.Marker({
            map, 
            position: positions[i].latlng, 
          });
          const infowindow = new window.kakao.maps.InfoWindow({
            content: positions[i].content, 
          });
          infoWindows.push(infowindow);
          window.kakao.maps.event.addListener(marker, "click", function () {
            closeAllInfoWindows();
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
      });
    };
  }, []);

  const closeAllInfoWindows = (): void => {
    infoWindows.forEach((infowindow) => {
      infowindow.close();
    });
  };

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
