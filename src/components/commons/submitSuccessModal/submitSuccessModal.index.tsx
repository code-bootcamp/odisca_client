import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #4f4f4f;
  margin-bottom: 35px;
`;

const MoveBtn = styled.button`
  width: 384px;
  height: 43px;
  background: #40e0d0;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export default function SubmitSuccessAlertModal(props): JSX.Element {
  const router = useRouter();

  const onClickMoveMapEditor = (): void => {
    void router.push(`/admin/${props.url}/mapEditor`);
  };

  return (
    <Wrapper>
      <Body>
        <Contents>등록에 성공했습니다!</Contents>
        <Contents>좌석배치표를 만들어주세요!</Contents>
        <MoveBtn onClick={onClickMoveMapEditor}>이동</MoveBtn>
      </Body>
    </Wrapper>
  );
}
