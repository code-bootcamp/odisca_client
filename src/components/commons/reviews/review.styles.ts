import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 25px;
`;

export const CafeName = styled.label`
  font-size: 26px;
  font-weight: 600;
  color: #4f4f4f;
  margin-right: 8px;
`;

export const Seat = styled.div`
  color: #bdbdbd;
  font-size: 16px;
  padding-bottom: 4px;
  margin-right: 8px;
`;

export const VisitDate = styled.div`
  color: #bdbdbd;
  font-size: 16px;
  padding-bottom: 4px;
  margin-right: 8px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 60px; */
`;

export const CafeImg = styled.img`
  width: 410px;
  height: 364px;
`;

export const ReviewWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 620px;
  margin-left: 65px;
`;

export const ReviewTitle = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const ReviewInput = styled.textarea`
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  resize: none;
  width: 620px;
  height: 160px;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 25px;
  :focus {
    outline: 2px solid #40e0d0;
  }
  // 인풋창 클릭시 아웃라인 색 변경
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 620px;
`;

export const ReviewEditBtn = styled.button`
  border: none;
  width: 140px;
  height: 45px;
  background-color: #40e0d0;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const ReviewCreateBtn = styled.button`
  border: none;
  width: 140px;
  height: 45px;
  background-color: #40e0d0;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 600;
  margin-left: calc(620px - 140px);
  cursor: pointer;
`;

export const ReviewDeleteBtn = styled.button`
  border: 1px solid #40e0d0;
  width: 140px;
  height: 45px;
  background-color: #fff;
  color: #40e0d0;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 600;
  margin-left: 25px;
  cursor: pointer;
`;
