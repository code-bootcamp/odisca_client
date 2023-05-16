import * as S from "./header.style";
import React, { useEffect, useState } from "react";
import { Modal, Select, Space } from "antd";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION } from "./header.queries";
import { IRsp } from "./header.type";

declare const window: typeof globalThis & {
  IMP: any; // 포트원 쪽에 관련 타입이 있을 수 있음. Docs에서 발견 못함
};

export default function LayoutHeader(): JSX.Element {
  const [open, setOpen] = useState(false);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  // 결제 모달 관련
  const [isModal, setIsModal] = useState(false);
  const [price, setPrice] = useState(1000);
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION);

  const showModal = (): void => {
    setPrice(1000);
    setIsModal(true);
  };
  const closeModal = (): void => {
    setIsModal(false);
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
        // merchant_uid: "ORD20180131-0000011",
        name: String(price) + "포인트",
        amount: price,
        buyer_email: "123@123123.com",
        buyer_name: "문재준",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/payment/",
      },
      // rsp는 아임포트 api에서 받아오는 객체 관련 Docs https://portone.gitbook.io/docs/sdk/javascript-sdk/cft-rt#request_pay-rsp
      async (rsp: IRsp) => {
        if (rsp.success) {
          // 여기에 뮤테이션을 보내야 합니다!
          // console.log(String(price) + "원 결제 성공");
          const result = await createPointTransaction({
            variables: {
              createPointTransactionInput: {
                impUid: rsp.imp_uid,
                amount: price,
              },
            },
          });
          console.log(result);
          closeModal();
        } else {
          alert("결제 실패");
        }
      }
    );
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
    script.onload = () => {};
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.LightWrapper>
          <S.Logo src="/logo.png"></S.Logo>
        </S.LightWrapper>
        <S.RightWrapper>
          <S.ProfileWrapper>
            <S.ProfileIcon src="/ProfileIcon.png"></S.ProfileIcon>
            <S.Name>윤달콩</S.Name>
            <S.Text>님 안녕하세요!</S.Text>
            <S.PayButton onClick={showModal}>충전</S.PayButton>
          </S.ProfileWrapper>
          <Space>
            <S.Menu type="primary" onClick={showDrawer}>
              <S.MenuIcon></S.MenuIcon>
              <S.MenuIcon></S.MenuIcon>
              <S.MenuIcon></S.MenuIcon>
            </S.Menu>
          </Space>
          <S.MenuDrawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={onClose}
            open={open}
            width={350}
            bodyStyle={{ padding: 30 }}
          >
            <S.MenuList>
              <p>회원정보</p>
              <p>스카찾기</p>
              <p>로그아웃</p>
            </S.MenuList>
          </S.MenuDrawer>
        </S.RightWrapper>
      </S.Wrapper>

      {/* 여기서부터 결제 쪽입니다. */}
      {isModal ? (
        <Modal
          title="포인트 결제"
          open={isModal}
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
