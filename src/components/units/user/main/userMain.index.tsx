// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";
import SearchBar01 from "../../../commons/searchbars/01/SearchBar01.index";
import { useState } from "react";
import { DistrictName } from "./cafelist/cafelistBody/cafelistItem/CafeListItem.styles";

export default function UserMain(): JSX.Element {
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");

  const handleSecondCityChange = (value: string): void => {
    setSelectedDistrict(value);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "75vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "600px",
          overflow: "auto",
          overflowY: "scroll",
          height: "75vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DistrictName>{selectedDistrict}</DistrictName>
          <SearchBar01
            style={{ position: "absolute" }}
            onSecondCityChange={handleSecondCityChange}
          />
        </div>

        <CafeList selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          width: "1300px",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Map selectedDistrict={selectedDistrict} />
      </div>
    </div>
  );
}
