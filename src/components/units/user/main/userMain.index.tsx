// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";
import SearchBar01 from "../../../commons/searchbars/01/SearchBar01.index";
import { useState } from "react";

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
      }}
    >
      <div
        style={{
          overflow: "auto",
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <SearchBar01
          style={{ position: "absolute" }}
          onSecondCityChange={handleSecondCityChange}
        />
        <CafeList selectedDistrict={selectedDistrict} />
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Map selectedDistrict={selectedDistrict} />
      </div>
    </div>
  );
}
