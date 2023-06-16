import styled from "@emotion/styled";
import { Modal } from "antd";
// import { useRouter } from "next/router";
import { IQuery } from "../../../commons/types/generated/types";
import { useMutationDeleteStudyCafe } from "../hooks/mutations/useMutationDeleteStudyCafe";

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

interface IProps {
  onCancel: () => void;
  data?: Pick<IQuery, "fetchOneStudyCafeForAdminister"> | null;
}

export default function DeleteModal(props: IProps): JSX.Element {
  //   const router = useRouter();
  const [deleteLoginStudyCafe] = useMutationDeleteStudyCafe();

  const onClickDeleteCafe = (): void => {
    try {
      const result = deleteLoginStudyCafe({
        variables: {
          studyCafe_id: String(
            props.data?.fetchOneStudyCafeForAdminister.studyCafe_id
          ),
        },
      });
      console.log(result);
      Modal.success({
        content: "삭제가 완료되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: "오류가 발생했습니다.",
        });
        props.onCancel();
      }
    }
    // void router.push("/admin/adminPage");
  };

  const onClickCancel = (): void => {
    props.onCancel();
  };

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
