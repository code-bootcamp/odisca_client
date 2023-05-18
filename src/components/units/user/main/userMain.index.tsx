// 메인페이지

import styled from "@emotion/styled";
import SearchBar01 from "../../../commons/searchbars/01/SearchBar01.index";
import CafeList from "./cafelist/CafeList.index";
import Map from "../../../commons/hooks/customs/useMap";

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
`;

export default function UserMain(): JSX.Element {
  return (
    <>
      <Wrapper>
        <CafeList />
        <Map id="map"></Map>
        <SearchBar01 />
      </Wrapper>
    </>
  );
}
