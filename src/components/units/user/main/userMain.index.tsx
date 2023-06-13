// 메인페이지
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";
import { useState } from "react";
import SearchBar from "../../../commons/searchbar/SearchBar.index";
import SelectBar from "../../../commons/selectbar/SelectBar.index";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import * as S from "./userMain.styles";
export default function UserMain(): JSX.Element {
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [showCafeList, setShowCafeList] = useState(false); //  카페리스트 보여줄지 여부 상태
  const { onChangeSearchbar, keyword } = useSearch({ refetch, refetchCount });

  const handleSecondCityChange = (value: string): void => {
    setSelectedDistrict(value);
    setShowCafeList(true); // 검색창 변경 시 카페리스트 보이도록 설정
  };

  return (
    <S.MainPageLayout>
      <S.CafeListLayout>
        <CafeList selectedDistrict={selectedDistrict} />
      </S.CafeListLayout>
      <S.MapLayout>
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
