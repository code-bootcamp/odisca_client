import styled from "@emotion/styled";

export const Header = styled.header`
  width: 850px;
  display: flex;
  flex-direction: column;
`;
export const Headerbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #4f4f4f;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
export const SeatBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  width: 150px;
  border: none;
  background: none;
  cursor: pointer;
`;
export const DevidedLine = styled.line`
  width: 100%;
  border-bottom: 1px solid #4f4f4f;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
