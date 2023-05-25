import { useState, CSSProperties } from "react";

import * as S from "./SearchBar.styles";

type CityData = Record<string, string[]>;

const provinceData = ["서울"];
// prettier-ignore
const cityData:CityData = {
  서울: [
    "강남구", "강동구","강북구","강서구","관악구","광진구","구로구","금천구",
    "노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구",
    "성북구", "송파구","양천구", "영등포구","용산구","은평구", "종로구","중구","중랑구",
  ],
};

interface SearchBar01Props {
  style?: CSSProperties;
  onSecondCityChange: (value: string) => void;
}

export default function SearchBar01({
  onSecondCityChange,
}: SearchBar01Props): JSX.Element {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value: string): void => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const handleSecondCityChange = (value: string): void => {
    setSecondCity(value);
    onSecondCityChange(value);
  };

  return (
    <>
      <S.SearchBar>
        <S.SelectBox
          className="select"
          defaultValue={provinceData[0]}
          style={{ marginRight: "10px" }}
          onChange={(value: unknown): void => {
            handleProvinceChange(value as string);
          }}
          options={provinceData.map((province) => ({
            label: province,
            value: province,
          }))}
        />
        <S.SelectBox
          style={{ width: "80px" }}
          value={secondCity}
          onChange={(value: unknown): void => {
            handleSecondCityChange(value as string);
          }}
          options={cities.map((city) => ({ label: city, value: city }))}
        />
      </S.SearchBar>
    </>
  );
}
