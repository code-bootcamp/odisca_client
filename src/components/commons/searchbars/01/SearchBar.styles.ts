import styled from "@emotion/styled";
import { Select } from "antd";
export const SearchBar = styled.div`
  left: 280px;
  z-index: 1;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
`;
export const SelectBox = styled(Select)`
  /* .ant-select {
    width: 100px;
    height: 100px;
  } */
  /* .ant-select-selector {
    font-size: 20px;
    width: 100px;
    height: 100px;
  } */
  /* .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #ffffff;
    border: 10px solid #d9d9d9;
  } */
  size: 5;
  .ant-select.ant-select-open .ant-select-selector {
    height: 100px;
  }
  .select {
    width: 100px;
    height: 100px;
  }
`;
