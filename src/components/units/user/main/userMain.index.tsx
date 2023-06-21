// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";
import { useState } from "react";
import SearchBar from "../../../commons/searchbar/SearchBar.index";
import SelectBar from "../../../commons/selectbar/SelectBar.index";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import * as S from "./userMain.styles";
import { useQueryFetchAllStudyCafes } from "../../../commons/hooks/queries/useQueryFetchAllStudyCafes";
export default function UserMain(): JSX.Element {
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [showCafeList, setShowCafeList] = useState(false); //  카페리스트 보여짐 여부
  const page = 1;
  const { data, refetch } = useQueryFetchAllStudyCafes({
    page,
    studyCafe_city: "your_city_value",
    studyCafe_district: "your_district_value",
  });
  const { onChangeSearchbar, keyword } = useSearch({ refetch });
  console.log(data);
  const handleSecondCityChange = (value: string): void => {
    setSelectedDistrict(value);
    setShowCafeList(true); // 검색창 변경 시 카페리스트 보이도록 설정
  };

  return (
    <S.MainPageLayout>
      <S.CafeListLayout showCafeList={showCafeList}>
        <CafeList selectedDistrict={selectedDistrict} />
      </S.CafeListLayout>
      <S.MapLayout showCafeList={showCafeList}>
        <Map selectedDistrict={selectedDistrict} />
      </S.MapLayout>
      <S.BarLayout>
        <SearchBar onChangeSearchbar={onChangeSearchbar} />
        <SelectBar
          style={{ position: "absolute" }}
          onSecondCityChange={handleSecondCityChange}
        />
      </S.BarLayout>
    </S.MainPageLayout>
  );
}
