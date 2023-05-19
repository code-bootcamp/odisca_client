import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 825px;
`;

const Header = styled.header`
  font-weight: 600;
  font-size: 30px;
  color: #4f4f4f;
  margin-bottom: 25px;
`;

const DivideLine = styled.div`
  border-bottom: 1px solid #4f4f4f;
  width: 100%;
`;

export default function UserEditHeader(): JSX.Element {
  return (
    <Wrapper>
      <Header>정보수정</Header>
      <DivideLine></DivideLine>
    </Wrapper>
  );
}
