import styled from "@emotion/styled";

const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 1000px;
`;

const MyPageTitle = styled.h1`
  padding-bottom: 25px;
  border-bottom: 1px solid #4f4f4f;
  font-size: 30px;
`;

export default function TransactionListHeader(): JSX.Element {
  return (
    <Body>
      <Wrapper>
        <MyPageTitle>내 결제 내역</MyPageTitle>
      </Wrapper>
    </Body>
  );
}
