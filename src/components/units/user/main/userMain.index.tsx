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
        height: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "22%",
          height: "100vh",
          position: "absolute",
        }}
      >
        <DistrictName>{selectedDistrict}</DistrictName>
        <CafeList selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          width: "78%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "21.2vw",
        }}
      >
        <Map selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          left: "87vw",
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
