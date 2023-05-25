import { Modal, Select } from "antd";
import { useState } from "react";
import { IRsp } from "../../../commons/layout/header/header.type";
import { useMutationCreatePointTransaction } from "../../../commons/hooks/mutations/useMutationCreatePointTransaction";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";

declare const window: typeof globalThis & {
  IMP: any; // 포트원 쪽에 관련 타입이 있을 수 있음. Docs에서 발견 못함
};

interface IPropsPayModal {
  isPayModal: boolean;
  setIsPayModal: (i: boolean) => void;
}

export default function PayModal(props: IPropsPayModal): JSX.Element {
  const [price, setPrice] = useState(1000);
  const [createLoginPointTransaction] = useMutationCreatePointTransaction();
  const { refetch } = useQueryFetchLoginUser();
  const closeModal = (): void => {
    props.setIsPayModal(false);
  };
  const onClickPrice = (value: string): void => {
    setPrice(Number(value));
  };
  const onClickPayment = (): void => {
    console.log("시작");
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
          console.log(rsp, "결제진행");
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

  return (
    <>
      {props.isPayModal ? (
        <Modal
          title="포인트 결제"
          open={props.isPayModal}
          onOk={onClickPayment}
          onCancel={closeModal}
        >
          <Select
            defaultValue="1천원"
            style={{ width: 400, boxShadow: "0 0 0 0" }}
            onChange={onClickPrice}
            options={[
              { value: "1000", label: "1천원" },
              { value: "5000", label: "5천원" },
              { value: "30000", label: "3만원" },
              { value: "50000", label: "5만원" },
            ]}
          />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
