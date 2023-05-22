import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Location = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 40px;
`;

export const CafeList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ListBox = styled.div`
  width: 100%;
`;
export const CafeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px;
`;
export const DevidedLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
`;
export const CafeImg = styled.img`
  width: 500px;
  height: 200px;
  background-color: #bdbdbd;
  margin-bottom: 27px;
`;

export const CafeInfo = styled.div`
  display: flex;
`;

export const CafeName = styled.h2`
  display: inline-block;
  margin-right: 5px;
  font-weight: 700;
  font-size: 40px;
  color: #4f4f4f;
`;

export const PriceImg = styled.img`
  margin-right: 5px;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: 18px;
  margin-right: 5px;
  vertical-align: 2px;
`;

export const CafeDetail = styled.div`
  margin: 14px 0px 25px 0px;
  font-size: 16px;
  color: #bdbdbd;
  padding-left: 5px;
`;

export const CafeReview = styled.div`
  width: 100%;
  height: 70px;
  background: #f7f7f7;
  padding: 12px 7px;
  font-size: 20px;
`;
