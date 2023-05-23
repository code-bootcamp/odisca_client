// 메인페이지 카페리스트

import styled from "@emotion/styled";
import { useState } from "react";
import SearchBar01 from "../../../../commons/searchbars/01/SearchBar01.index";
import CafeListBody from "./cafelistBody/CafeListBody.index";

const Wrapper = styled.div`
  width: 610px;
`;

export default function CafeList(): JSX.Element {
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleSecondCityChange = (value: string): void => {
    setSelectedDistrict(value);
  };

  return (
    <Wrapper>
      <SearchBar01 onSecondCityChange={handleSecondCityChange} />
      <CafeListBody selectedDistrict={selectedDistrict} />
    </Wrapper>
  );
}
