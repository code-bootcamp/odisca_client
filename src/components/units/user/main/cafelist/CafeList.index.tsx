// 메인페이지 카페리스트

import styled from "@emotion/styled";
import CafeListBody from "./cafelistBody/CafeListBody.index";
interface Props {
  selectedDistrict: string;
}

const Wrapper = styled.div``;

export default function CafeList({ selectedDistrict }: Props): JSX.Element {
  return (
    <Wrapper>
      <CafeListBody selectedDistrict={selectedDistrict} />
    </Wrapper>
  );
}
