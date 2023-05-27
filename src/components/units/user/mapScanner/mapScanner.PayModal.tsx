import { useState } from "react";
import { IRsp } from "../../../commons/layout/header/header.type";
import { useMutationCreatePointTransaction } from "../../../commons/hooks/mutations/useMutationCreatePointTransaction";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./mapScanner.style";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  IMP: any; // 포트원 쪽에 관련 타입이 있을 수 있음. Docs에서 발견 못함
};

interface IPropsPayModal {
  isPayModal: boolean;
  setIsPayModal: (i: boolean) => void;
}

export default function PayModal(props: IPropsPayModal): JSX.Element {
  const [isShowOptions, setShowOptions] = useState(false);
  const [price, setprice] = useState(1000);
  const [createLoginPointTransaction] = useMutationCreatePointTransaction();
  const { refetch } = useQueryFetchLoginUser();
  const closeModal = (): void => {
    props.setIsPayModal(false);
  };

  const onClickPrice = (e: string): void => {
    setprice(e.currentTarget.getAttribute("value"));
  };

  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp56618747");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: String(price) + "포인트",
        amount: price,
        buyer_email: "123@123123.com",
        buyer_name: "문재준",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/payment/",
      },

      async (rsp: IRsp) => {
        if (rsp.success) {
          try {
            await createLoginPointTransaction({
              variables: {
                createPointTransactionInput: {
                  pointTransaction_impUid: rsp.imp_uid,
                  pointTransaction_amount: rsp.paid_amount,
                },
              },
            });
            await refetch();
            closeModal();
          } catch (err) {
            console.log(err);
          }
        } else {
          alert("결제 실패");
        }
      }
    );
  };

  const onCancle = (): void => {
    closeModal();
    Modal.success({
      content: "결제가 취소되었습니다.",
    });
  };
  return (
    <>
      {props.isPayModal ? (
        <S.PayModal
          open={props.isPayModal}
          onOk={onClickPayment}
          onCancel={closeModal}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <S.Top>
            <S.TopTitle>충전하실 금액을 선택해주세요!</S.TopTitle>
          </S.Top>
          <S.SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <S.Label>{price}</S.Label>
            <S.MiddileWrapper>
              <S.SelectOptions show={isShowOptions}>
                <S.Option value="1,000원" onClick={onClickPrice}>
                  1,000원
                </S.Option>
                <S.Option value="5,000원" onClick={onClickPrice}>
                  5,000원
                </S.Option>
                <S.Option value="30,000원" onClick={onClickPrice}>
                  30,000원
                </S.Option>
                <S.Option value="50,000원" onClick={onClickPrice}>
                  50,000원
                </S.Option>
              </S.SelectOptions>
            </S.MiddileWrapper>
          </S.SelectBox>
          <S.Line></S.Line>

          <S.Bottom>
            <S.CancleBtn onClick={onCancle}>취소</S.CancleBtn>
            <S.ChargeBtn onClick={onClickPayment}>충전</S.ChargeBtn>
          </S.Bottom>
        </S.PayModal>
      ) : (
        <></>
      )}
    </>
  );
}
