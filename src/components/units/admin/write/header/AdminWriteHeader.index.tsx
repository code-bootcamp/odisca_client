import styled from "@emotion/styled";

const Header = styled.header`
  width: 850px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  color: #4f4f4f;
`;

export default function AdminWriteHeader(): JSX.Element {
  return (
    <>
      {/* 업체 수정하기 */}
      <Header>
        <Title>업체 등록하기</Title>
      </Header>
    </>
  );
}
