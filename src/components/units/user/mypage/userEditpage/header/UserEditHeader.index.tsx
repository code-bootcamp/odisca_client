import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 825px;
`;

const Header = styled.header`
  font-weight: 600;
  font-size: 40px;
  color: #4f4f4f;
  margin-top: 58px;
`;

export default function UserEditHeader(): JSX.Element {
  return (
    <Wrapper>
      <Header>정보 수정</Header>
    </Wrapper>
  );
}
