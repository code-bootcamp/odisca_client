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
  const { data, fetchMore } = useQueryFetchAllStudyCafes({
    studyCafe_city: "서울",
    studyCafe_district: selectedDistrict,
    page: 1,
  });
  console.log(data, "cafes");

  // 지도 중심좌표
  // const cafeDatas = [
  //   { district: "강남구", lon: 127.0495556, lat: 37.514575 },
  //   { district: "구로구", lon: 126.8895972, lat: 37.49265 },
  //   { district: "노원구", lon: 127.0583889, lat: 37.65146111 },
  //   { district: "동대문구", lon: 127.0421417, lat: 37.571625 },
  //   { district: "마포구", lon: 126.9105306, lat: 37.50965556 },
  // ];

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
          center: new window.kakao.maps.LatLng(37.514575, 127.0495556),
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
