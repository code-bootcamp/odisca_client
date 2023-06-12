import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../../commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { useEffect, useState } from "react";

const FooterWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 20px 0 80px 0;
`;

const Footer = styled.footer`
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;
const Btn = styled.button`
  width: 130px;
  height: 50px;
  background-color: #ffffff;
  color: #40e0d0;
  border: 1px solid #40e0d0;
  border-radius: 30px;
  margin: 0px 12px;
  cursor: pointer;
  font-weight: 600;
  :hover {
    background-color: #40e0d0;
    color: #ffffff;
    border: none;
  }
`;
export default function AdminDetailFooter(): JSX.Element {
  const router = useRouter();

  const { data } = useQueryFetchAllSeatsByStudyCafeId(String(router.query.Id));

  const onClickEditSeats = (): void => {
    void router.push("/admin/" + String(router.query.Id) + "/mapEditor");
  };

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (data?.fetchAllSeatsByStudyCafeId.length === 0) {
      setIsSaved(true);
    }
  });

  const onClickMoveEdit = (): void => {
    void router.push(`/admin/${String(router.query.Id)}/edit`);
  };

  const onClickGoBack = (): void => {
    history.back();
  };

  return (
    <FooterWrapper>
      <Footer>
        <Btn onClick={onClickMoveEdit}>정보수정</Btn>
        {isSaved ? <Btn onClick={onClickEditSeats}>배치도 등록</Btn> : <></>}
        <Btn onClick={onClickGoBack}>뒤로가기</Btn>
      </Footer>
    </FooterWrapper>
  );
}
