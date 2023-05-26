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
  size: 6;
  .ant-select.ant-select-open .ant-select-selector {
    height: 100px;
  }
  .select {
    width: 100px;
    height: 100px;
    size: 7;
  }
  && {
    .select {
      width: 100px;
      height: 100px;
    }
  }
  && {
    &.ant-select {
      font-size: 12px;
    }
    &.ant-select-open .ant-select-selector {
      height: 100px;
    }
    &.select {
      width: 100px;
      height: 100px;
      font-size: 18px;
    }
  }
`;
