import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.p`
  font-size: 17px;
  margin-bottom: 40px;
  font-weight: 500;
`;

const BtnBox = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 80px;
  height: 35px;
  border: 1px solid #40e0d0;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  background-color: #ffffff;
  color: #40e0d0;
  :hover {
    background-color: #40e0d0;
    color: #ffffff;
    border: none;
  }
`;

export default function DeleteModal(): JSX.Element {
  const onClickDeleteCafe = (): void => {};

  const onClickCancel = (): void => {};

  return (
    <Wrapper>
      <Contents>등록된 업체를 삭제하시겠습니까?</Contents>
      <BtnBox>
        <Btn onClick={onClickDeleteCafe}>삭제</Btn>
        <Btn onClick={onClickCancel}>취소</Btn>
      </BtnBox>
    </Wrapper>
  );
}
