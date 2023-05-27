// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";
import SearchBar01 from "../../../commons/searchbars/01/SearchBar01.index";
import { useState } from "react";

export default function UserMain(): JSX.Element {
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [showCafeList, setShowCafeList] = useState(false); //  카페리스트 보여줄지 여부 상태

  const handleSecondCityChange = (value: string): void => {
    setSelectedDistrict(value);
    setShowCafeList(true); // 검색창 변경 시 카페리스트 보이도록 설정
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "relative",
        zIndex: 0,
        // 전체 메인페이지 레이아웃
      }}
    >
      <div
        style={{
          width: showCafeList ? "22%" : "0%",
          height: "100vh",
          position: "absolute",
          zIndex: 3,
          transition: "width 0.5s",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          // 카페리스트 레이아웃
        }}
      >
        <CafeList selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          width: showCafeList ? "100%" : "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          transition: "left 0.5s",
          zIndex: 2,
          // 지도 레이아웃
        }}
      >
        <Map selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "87vw",
          zIndex: 4,
          // 검색창 레이아웃
        }}
      >
        <SearchBar01
          style={{ position: "absolute" }}
          onSecondCityChange={handleSecondCityChange}
        />
      </div>
    </div>
  );
}
