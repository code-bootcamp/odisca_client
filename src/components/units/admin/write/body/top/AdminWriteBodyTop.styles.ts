import styled from "@emotion/styled";

export const SectionTop = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SectionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const InputBox = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LabelBox = styled.label`
  width: 100px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  width: 100%;
  font-size: 15px;
  color: #4f4f4f;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #f7f7f7;
  text-indent: 10px;
`;

export const AddressSectionBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
`;
export const AddressLabel = styled.label`
  width: 30px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  font-size: 15px;
  color: #4f4f4f;
`;

export const AddressInputBox = styled.div`
  width: 100%;
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const AddressZip = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const Zipcode = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #f7f7f7;
  margin-right: 10px;
  &::placeholder {
    text-align: center;
  }
`;
export const SearchBtn = styled.button`
  width: 50px;
  border-radius: 10px;
  border: none;
  background: #40e0d0;
`;
export const AddressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Address = styled.input`
  width: 100%;
  margin-bottom: 30px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #f7f7f7;
  text-indent: 10px;
`;
