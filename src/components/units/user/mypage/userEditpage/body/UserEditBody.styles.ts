import styled from "@emotion/styled";

export const Wrapper = styled.main`
  margin-top: 77px;
  width: 827px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
`;

export const ProfileImgBox = styled.section`
  position: relative;
  margin-bottom: 40px;
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: gray;
`;

export const ProfileImgEdit = styled.img`
  position: absolute;
  right: 5px;
  top: 100px;
`;

export const InputForm = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

export const NonEditList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditListBox = styled.section`
  width: 100%;
`;

export const EditList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

export const ListDetail = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: #4f4f4f;
  line-height: 45px;
`;

export const DetailInput = styled.input`
  width: 700px;
  height: 50px;
  background: #f7f7f7;
  border: none;
  border-radius: 10px;
`;

export const AlertMessage = styled.div`
  margin-left: 130px;
  font-weight: 400;
  font-size: 14px;
  color: #7744aa;
`;

export const PhoneNumAuthBtn = styled.button`
  border: none;
  width: 87px;
  height: 49px;
  background: #40e0d0;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
`;
