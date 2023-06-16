import { useState, CSSProperties } from "react";

import * as S from "./SelectBar.styles";

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

interface SelectBarProps {
  style?: CSSProperties;
  onSecondCityChange: (value: string) => void;
}

export default function SelectBar({
  onSecondCityChange,
}: SelectBarProps): JSX.Element {
  const [cities] = useState(cityData[provinceData[0]]);
  const [isShowOptions, setShowOptions] = useState(false);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleSecondCityChange = (value: string): void => {
    setSecondCity(value);
    onSecondCityChange(value);
  };

  return (
    <S.SelectBar>
      <S.SelectBox
        onClick={() => {
          setShowOptions((prev) => !prev);
        }}
      >
        <S.Label>{secondCity}</S.Label>
        <S.SelectOptions show={isShowOptions ?? true}>
          {cities.map((city) => (
            <S.Option
              key={city}
              onClick={() => {
                handleSecondCityChange(city);
              }}
            >
              {city}
            </S.Option>
          ))}
        </S.SelectOptions>
      </S.SelectBox>
    </S.SelectBar>
  );
}
