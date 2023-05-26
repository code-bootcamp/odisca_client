import styled from "@emotion/styled";

export const Wrapper = styled.main`
  margin-top: 70px;
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
  background-color: #bdbdbd;
  display: flex;
`;

export const ProfileImgEdit = styled.img`
  position: absolute;
  right: 4px;
  top: 93px;
`;

export const InputForm = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const EditList = styled.div`
  width: 700px;
  height: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const ListDetail = styled.span`
  width: calc(700px - 600px);
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;
  line-height: 50px;
`;

export const DetailInput = styled.input`
  width: 700px;
  height: 50px;
  display: flex;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  color: #bdbdbd;
  padding-left: 10px;
  :focus {
    outline: 2px solid #40e0d0;
  }
  ::placeholder {
    color: #4f4f4f; /* 변경하고자 하는 플레이스홀더 색상 */
  }
`;

export const ReadOnlyDetailInput = styled.input`
  width: 700px;
  height: 50px;
  border: none;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  color: #bdbdbd;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

export const AlertMessage = styled.div`
  margin-left: 130px;
  font-weight: 400;
  font-size: 14px;
  color: #7744aa;
`;

export const BtnWrapper = styled.form`
  width: 827px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const EditBtn = styled.button`
  width: 190px;
  height: 53px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 26px;
  border: none;
  margin-right: 37px;
  color: #ffffff;
  background-color: #40e0d0;
`;

export const DleteUserBtn = styled.button`
  width: 190px;
  height: 53px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 26px;
  border: 1px solid #40e0d0;
  margin-right: 37px;
  color: #40e0d0;
  background-color: #ffffff;
`;
