import styled from "@emotion/styled";
import UserEditBody from "./body/UserEditBody.index";
import UserEditFooter from "./footer/UserEditFooter.index";
import UserEditHeader from "./header/UserEditHeader.index";

interface IFormData {
  password: string;
  phoneNumber: string;
}

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 823px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function UserEdit(): JSX.Element {
  // 회원정보 수정하기 클릭 시
  const onClickSubmit = async (data: IFormData) => {
    console.log(data);
  };

  return (
    <Body>
      <Wrapper>
        <UserEditHeader />
        <UserEditBody />
        <UserEditFooter onClickSubmit={onClickSubmit} />
      </Wrapper>
    </Body>
  );
}
