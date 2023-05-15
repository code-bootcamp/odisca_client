import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export const SectionMiddle = styled.section`
  width: 100%;
  margin-top: 10px;
`;
export const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  width: 100%;
  font-size: 15px;
  color: #4f4f4f;
  padding-bottom: 30px;
`;
export const ImageListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageListOne = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
export const ImageListTwo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageBox = styled.div`
  width: 140px;
  height: 140px;
  background: #f7f7f7;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Icon = styled(PlusCircleOutlined)``;
