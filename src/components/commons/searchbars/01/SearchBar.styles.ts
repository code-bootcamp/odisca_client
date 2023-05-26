import styled from "@emotion/styled";
import { Select } from "antd";
export const SearchBar = styled.div`
  left: 280px;
  z-index: 1;
  border: none;
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
`;
export const SelectBox = styled(Select)`
  size: 5;
  .ant-select.ant-select-open .ant-select-selector {
    height: 100px;
  }
  .select {
    width: 100px;
    height: 100px;
  }
`;
