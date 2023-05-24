// 메인페이지 카페리스트

import styled from "@emotion/styled";
import CafeListBody from "./cafelistBody/CafeListBody.index";

const Wrapper = styled.div`
  /* width: 610px; */
`;

export default function CafeList({ selectedDistrict }): JSX.Element {
  return (
    <Wrapper>
      <CafeListBody selectedDistrict={selectedDistrict} />
    </Wrapper>
  );
}
