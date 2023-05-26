import styled from "@emotion/styled";
import { Modal } from "antd";

export const Body = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const WrapperTop = styled.form`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #4f4f4f;
`;

export const SectionTopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InputBox = styled.div`
  width: calc(50% - 20px);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LabelBox = styled.label`
  width: 90px;
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
  width: calc(100% - 90px);
  height: 50px;
  border-radius: 10px;
  text-indent: 10px;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  color: #4f4f4f;
  :focus {
    outline: 2px solid #40e0d0;
  }
  ::placeholder {
    color: #bdbdbd;
  }
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

export const LabelDetail = styled.span`
  margin-left: 10px;
  font-weight: 600;
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
  margin-bottom: 15px;
`;

export const Zipcode = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  color: #4f4f4f;
  margin-right: 10px;
  :focus {
    outline: 2px solid #40e0d0;
  }
  ::placeholder {
    text-align: center;
    color: #bdbdbd;
  }
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #40e0d0;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
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
  text-indent: 10px;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  color: #4f4f4f;
  :focus {
    outline: 2px solid #40e0d0;
  }
`;

export const Error = styled.div`
  color: red;
`;

export const SectionMiddle = styled.section`
  width: 100%;
  margin-top: 10px;
`;

export const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageListBox = styled.div`
  display: flex;
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
  position: relative;
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
`;

export const MainImgCheckBtn = styled.input`
  position: absolute;
  left: 8px;
  top: 8px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const PlusIcon = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  color: #4f4f4f;
  background-color: #f7f7f7;
  cursor: pointer;
`;

export const SectionBottom = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Notice = styled.textarea`
  height: 520px;
  border-radius: 10px;
  text-indent: 10px;
  margin-top: 30px;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  color: #4f4f4f;
  :focus {
    outline: 2px solid #40e0d0;
  }
`;

export const Footer = styled.section`
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
  margin-bottom: 50px;
`;

export const Btn = styled.button`
  width: 130px;
  height: 50px;
  background-color: #ffffff;
  color: #40e0d0;
  font-size: 17px;
  font-weight: 600;
  border: 1px solid #40e0d0;
  border-radius: 30px;
  margin: 0px 12px;
  cursor: pointer;
  :hover {
    background-color: #40e0d0;
    color: #ffffff;
    border: none;
  }
`;

export const Hour = styled.div``;

export const AddressSearchModal = styled(Modal)``;

export const SubmitSuccessModal = styled(Modal)``;
