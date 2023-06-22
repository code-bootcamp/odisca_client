// 메인페이지 카페리스트

import CafeListBody from "./cafeListBody/CafeListBody.index";

// import CafeListBody from "./cafeListBody/CafeListBody.index";

interface Props {
  selectedDistrict: string;
}

export default function CafeList({ selectedDistrict }: Props): JSX.Element {
  return (
    <div>
      <CafeListBody selectedDistrict={selectedDistrict} />
    </div>
  );
}
