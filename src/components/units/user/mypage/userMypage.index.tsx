import styled from "@emotion/styled";
import UserMyPageBody from "./body/userMypagebody.index";
import UserMyPageHeader from "./header/userMypageheader.index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function UserMyPage(): JSX.Element {
  return (
    <Wrapper>
      <UserMyPageHeader />
      <UserMyPageBody />
    </Wrapper>
  );
}
