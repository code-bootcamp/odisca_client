import { useRouter } from "next/router";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchAllStudyCafes } from "../../../../../commons/hooks/queries/useQueryFetchAllStudyCafes";
import CafeListItem from "./cafelistItem/CafeListItem.index";

interface Props {
  selectedDistrict: string;
}

declare const window: typeof globalThis & {
  kakao: any;
};

export default function CafeListBody(props: Props): JSX.Element {
  const { selectedDistrict } = props;
  const router = useRouter();
  const infoWindows = [];

  const { data, fetchMore } = useQueryFetchAllStudyCafes({
    studyCafe_city: "서울",
    studyCafe_district: selectedDistrict,
    page: 1,
  });
  console.log(data, "cafes");
  const filteredCafes = data?.fetchAllStudyCafes.filter(
    (cafe) => cafe.studyCafe_district === selectedDistrict
  );

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchAllStudyCafes.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchAllStudyCafes === undefined) {
          return {
            fetchAllStudyCafes: [...prev.fetchAllStudyCafes],
          };
        }
        return {
          fetchAllStudyCafes: [
            ...prev.fetchAllStudyCafes,
            ...fetchMoreResult.fetchAllStudyCafes,
          ],
        };
      },
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=12e2554bb6ebf42463e132c31315b011&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        // const options = {
        //   // 지도를 생성할 때 필요한 기본 옵션
        //   center: new window.kakao.maps.LatLng(37.514575 ,127.0495556), // 지도의 중심좌표.
        //   level: 3, // 지도의 레벨(확대, 축소 정도)
        // };
        // const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // console.log(map);
        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.514575, 127.0495556), // 기본 강남구
          level: 3,
        });

        const cafes = data?.fetchAllStudyCafes;
        if (cafes !== undefined) {
          cafes.forEach((cafe) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                cafe.studyCafe_lat,
                cafe.studyCafe_lon
              ),
            });
            marker.setMap(map);

            const positions = {
              content:
                '<div class="wrap">' +
                '    <div class="info" style="padding:10px" id=image>' +
                '        <div class="title" style="display: flex; flex-direction: row; justify-content: space-between; align-items:center;">' +
                `<div style="font-size:20px;">${data?.studyCafe_name}</div>` +
                '            <div style="cursor:pointer; padding:10px" id="closeBtn">X</div>' +
                "        </div>" +
                '        <div class="body" style="display:flex;">' +
                '            <div class="img">' +
                '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70" id="image" style="cursor:pointer;">' +
                "           </div>" +
                '            <div class="desc" style="margin-left:10px;">' +
                `                <div class="ellipsis">${data?.studyCafe_address} ${data?.studyCafe_addressDetail}</div>` +
                "            </div>" +
                "        </div>" +
                "    </div>" +
                "</div>",
              latlng: new window.kakao.maps.LatLng(
                data?.studyCafe_lat,
                data?.studyCafe_lon
              ),
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
                void router.push(`/user/${data?.studyCafe_id}`);
              }
            });
            const closeAllInfoWindows = (): void => {
              infoWindows.forEach((infowindow) => {
                infowindow.close();
              });
            };
          });
        }
      });
    };
  }, [data]);

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {filteredCafes?.map((el) => (
          <CafeListItem key={el.studyCafe_id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
