import { useEffect } from "react";

interface Props {
  map: any;
  selectedDistrict: string;
}

declare const window: typeof globalThis & {
  kakao: any;
};

export function MapCenterUpdater({
  map,
  selectedDistrict,
}: Props): JSX.Element {
  useEffect(() => {
    if (map !== null && selectedDistrict !== undefined) {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(selectedDistrict, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          const { x, y } = result[0];

          // 중심 좌표로 이동
          map.setCenter(new window.kakao.maps.LatLng(y, x));
        }
      });
    }
  }, [map, selectedDistrict]);

  return null;
}
