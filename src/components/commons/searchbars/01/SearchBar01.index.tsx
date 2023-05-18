import styled from "@emotion/styled";
import { useState } from "react";
import { Select } from "antd";

const SearchBar = styled.div`
  position: absolute;
  width: 500px;
  height: 68px;
  left: 1360px;
  top: 70px;
  z-index: 1;
  border: none;
  border-radius: 30px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

const SearchBtn = styled.img`
  cursor: pointer;
`;

const provinceData = ["서울"];

const cityData = {
  서울: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
};

type CityName = keyof typeof cityData;

export default function SearchBar01(): JSX.Element {
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(
    cityData[provinceData[0] as CityName][0]
  );

  const handleProvinceChange = (value: CityName): void => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: CityName): void => {
    setSecondCity(value);
    // console.log(value);
  };

  const onClickSearchCafe = (): void => {};

  return (
    <>
      <SearchBar>
        <section>
          <Select
            defaultValue={provinceData[0]}
            style={{ width: 80, marginRight: "10px" }}
            onChange={handleProvinceChange}
            options={provinceData.map((province) => ({
              label: province,
              value: province,
            }))}
          />
          <Select
            style={{ width: 80 }}
            value={secondCity}
            onChange={onSecondCityChange}
            options={cities.map((city) => ({ label: city, value: city }))}
          />
        </section>
        <SearchBtn src="/user/main/search.png" onClick={onClickSearchCafe} />
      </SearchBar>
    </>
  );
}
