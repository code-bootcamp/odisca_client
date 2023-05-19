import styled from "@emotion/styled";
import { useMutationCancelLoginPointTransaction } from "../hooks/mutations/useMutationCancelLoginPointTransaction";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px 0px 30px 0px;
  font-weight: 600;
  font-size: 20px;
  color: #4f4f4f;
`;

const Btn = styled.button`
  width: 148px;
  height: 43px;
  background: #40e0d0;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

export default function CancelPayment(props): JSX.Element {
  const [cancelLoginPointTransaction] =
    useMutationCancelLoginPointTransaction();

  // 결제취소 버튼 클릭 시 포인트 결제 취소
  const onClickCancelPayment = (): void => {
    const result = cancelLoginPointTransaction({
      variables: {
        cancelPointTransactionInput: {
          // impUid: 받아올 값 지정해줘야 함(결제목록 query에서 impUid 가져오기)
        },
      },
    });
    console.log(result);
    alert("결제가 취소되었습니다.");
    // props <= src/components/units/user/mypage/userTransactionListPage/body/TransactionListBody.index.tsx
    props.handleCancel();
  };

  const onClickCloseModal = (): void => {
    props.handleCancel();
  };

  return (
    <Wrapper>
      <Title>결제를 취소하시겠습니까?</Title>
      <div>
        <Btn style={{ marginRight: "15px" }} onClick={onClickCancelPayment}>
          결제취소하기
        </Btn>
        <Btn onClick={onClickCloseModal}>돌아가기</Btn>
      </div>
    </Wrapper>
  );
}
