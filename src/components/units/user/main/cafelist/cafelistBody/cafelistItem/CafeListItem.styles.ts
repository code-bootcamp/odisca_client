import styled from "@emotion/styled";

export const Wrapper = styled.section``;

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
export const ListBox = styled.div``;

export const CafeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  cursor: pointer;
`;

export const DistrictName = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-left: 45px;
`;

export const DevidedLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
`;
export const CafeImg = styled.img`
  width: 100%;
  height: 200px;
`;

export const CafeInfo = styled.div`
  display: flex;
  padding-left: 5px;
  margin-top: 6px;
`;

export const CafeName = styled.h2`
  display: inline-block;
  margin-top: 13px;
  font-weight: 700;
  font-size: 28px;
  color: #4f4f4f;
  padding-left: 5px;
`;

export const PriceImg = styled.img`
  margin-right: 5px;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: 18px;
  margin-right: 5px;
  vertical-align: 2px;
  color: #4f4f4f;
`;

export const CafeDetail = styled.div`
  width: 100%;
  height: 5vh;
  margin: 14px 0px 0px 0px;
  font-size: 15px;
  color: #4f4f4f;
  padding-left: 5px;
  padding-top: 5px;
  overflow: hidden;
`;

export const CafeReview = styled.div`
  width: 100%;
  height: 5vh;
  background: #f7f7f7;
  padding: 12px 7px;
  background-color: rgba(79, 79, 79, 0.4);
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
`;
