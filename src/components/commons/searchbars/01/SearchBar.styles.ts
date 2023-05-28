import styled from "@emotion/styled";
import { mediaQueries } from "../../media/mediaQueries";

export const SearchBar = styled.div`
  z-index: 1;
  border: none;
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
  top: 60vh;
`;

export const SelectBox = styled.div`
  position: relative;
  color: #fff;
  font-size: large;
  font-weight: 500;
  left: -8vw;
  width: 350px;
  top: 4vh;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  background-color: rgba(79, 79, 79, 0.8);
  align-self: center;
  cursor: pointer;
  &::before {
    content: "🔎";
    position: absolute;
    top: 6px;
    right: 8px;
    color: #40e0d0;
    font-size: 20px;
  }
  ${mediaQueries("macBook")} {
    width: 270px;
    left: -9vw;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

export const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 200px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: rgba(79, 79, 79, 1);
  color: #fefefe;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
