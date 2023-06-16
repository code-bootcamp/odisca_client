import styled from "@emotion/styled";

export const MainPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  z-index: 0;
`;
export const CafeListLayout = styled.div`
	width: ${(props) => (props.showCafeList ? "22%" : "0")};
  height: 100vh;
  position: absolute;
  z-index: 3,
  transition: width 0.5s;
  background-color: rgba(255, 255, 255, 0.8);

`;
export const MapLayout = styled.div`
  width: ${(props) => (props.showCafeList ? "100%" : "100%")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: left 0.5s;
  z-index: 2;
`;
export const BarLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 80vw;
  z-index: 4;
`;
