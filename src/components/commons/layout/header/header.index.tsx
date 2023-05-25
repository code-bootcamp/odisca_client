import * as S from "./header.style";
import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "./header.queries";
import { useMutationDeleteAdmin } from "../../hooks/mutations/useMutationDeleteAdmin";
import { useMutationLogOutUser } from "../../hooks/mutations/useMutationLogoutUser";
import { useMutationLogOutAdmin } from "../../hooks/mutations/useMutationLogoutAdmin";
import { useRouter } from "next/router";
import { Wrapper } from "./header.style";
import PayModal from "../../../units/user/mapScanner/mapScanner.PayModal";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";

export default function LayoutHeader(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useQuery(FETCH_LOGIN_USER);
  const [logoutUser] = useMutationLogOutUser();
  const [logoutAdmin] = useMutationLogOutAdmin();

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  // 결제 모달 관련
  const [isModal, setIsModal] = useState(false);
  const [deleteAdmin] = useMutationDeleteAdmin();
  const router = useRouter();

  const onClickLogOut = async (): Promise<void> => {
    if (router.asPath.includes("admin")) {
      await logoutAdmin();
      alert("로그아웃 완료되었습니다.");
      void router.push("/admin/login");
    } else {
      await logoutUser();
      alert("로그아웃 완료되었습니다.");
      void router.push("/user/login");
    }
  };

  const onClickMyPage = (): void => {
    if (router.asPath.includes("admin")) {
      void router.push("/admin/adminpage");
    } else {
      void router.push("/user/mypage");
    }
  };

  const onClickMain = (): void => {
    void router.push("/user");
  };

  const showModal = (): void => {
    setIsModal(true);
  };

  const onClickDeleteAdmin = async (): Promise<void> => {
    const result = await deleteAdmin();
    console.log(result);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
    script.onload = () => {};

    if (localStorage.getItem("accessToken") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <S.LightWrapper>
          <S.Logo src="/header.png"></S.Logo>
        </S.LightWrapper>
        <S.RightWrapper>
          {!isLogin ? (
            <div></div>
          ) : (
            <S.ProfileWrapper>
              <S.ProfileIcon src="/ProfileIcon.png"></S.ProfileIcon>
              <S.Name>{data?.fetchLoginUser.user_name}</S.Name>
              <S.Text>님 안녕하세요!</S.Text>
              <S.PayButton onClick={showModal}>충전</S.PayButton>
            </S.ProfileWrapper>
          )}

          <Space>
            <S.Menu onClick={showDrawer}>
              <S.MenuIcon></S.MenuIcon>
              <S.MenuIcon></S.MenuIcon>
              <S.MenuIcon></S.MenuIcon>
            </S.Menu>
          </Space>
          <S.MenuDrawer
            title="menu"
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
            width={350}
            bodyStyle={{
              padding: 30,
              backgroundColor: "rgba(189, 189, 189, 0.3)",
            }}
          >
            <S.MenuList>
              <p onClick={onClickMyPage}>회원정보</p>
              <p onClick={onClickMain}>스카찾기</p>
              <p onClick={wrapAsync(onClickLogOut)}>로그아웃</p>
              <p onClick={wrapAsync(onClickDeleteAdmin)}>회원탈퇴</p>
            </S.MenuList>
          </S.MenuDrawer>
        </S.RightWrapper>
      </Wrapper>

      {/* 여기서부터 결제 쪽입니다. */}
      <PayModal isPayModal={isModal} setIsPayModal={setIsModal}></PayModal>
    </>
  );
}
