import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 38px;
`;

export const Title = styled.div`
  color: #4f4f4f;
  font-size: 20px;
  font-weight: 600;
`;

export const ValidationWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 10px;
`;

export const Input = styled.input`
  border: none;
  padding-left: 20x;
  margin-left: 20x;
  :focus {
    outline: none; // 아웃라인 색 변경
  }
  font-size: 15px;
`;

export const Timer = styled.div`
  font-size: 19px;
  color: #4f4f4f;
  margin-right: 20px;
`;

export const DivideLine = styled.div`
  width: 400px;
  border-bottom: 2px solid #bdbdbd;
`;

export const ErrorWrapper = styled.div`
  width: 400px;
  display: flex;
`;

export const Error = styled.div`
  margin-top: 10px;
  color: #7744aa;
  font-size: 14px;
`;

export const BtnWrapper = styled.form`
  margin-top: 35px;
`;

export const SubmitBtn = styled.button`
  border: none;
  border-radius: 10px;
  width: 400px;
  height: 38px;
  background-color: #40e0d0;
  color: white;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;
