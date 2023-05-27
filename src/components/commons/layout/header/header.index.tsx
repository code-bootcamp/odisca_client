import * as S from "./header.style";
import React, { useEffect, useState } from "react";
import { Modal, Space } from "antd";
import { useMutationDeleteAdmin } from "../../hooks/mutations/useMutationDeleteAdmin";
import { useMutationLogOutUser } from "../../hooks/mutations/useMutationLogoutUser";
import { useMutationLogOutAdmin } from "../../hooks/mutations/useMutationLogoutAdmin";
import { useRouter } from "next/router";
import { Wrapper } from "./header.style";
import PayModal from "../../../units/user/mapScanner/mapScanner.PayModal";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";
import { useQueryFetchLoginUser } from "../../hooks/queries/useQueryFetchLoginUser";
import { useQueryFetchLoginAdminister } from "../../hooks/queries/useQueryFetchLoginAdminister";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useQueryFetchLoginUser();
  const { data: dataAdmin } = useQueryFetchLoginAdminister();
  const [logoutUser] = useMutationLogOutUser();
  const [logoutAdmin] = useMutationLogOutAdmin();

  console.log(router, "header");

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  // 결제 모달 관련
  const [isModal, setIsModal] = useState(false);
  const [deleteAdmin] = useMutationDeleteAdmin();

  const onClickLogOut = async (): Promise<void> => {
    if (router.asPath.includes("admin")) {
      await logoutAdmin();
      Modal.success({
        content: "로그아웃 되었습니다!",
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginType");
      void router.push("/admin/login");
    } else {
      await logoutUser();
      Modal.success({
        content: "로그아웃 되었습니다!",
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginType");
      void router.push("/user/login");
    }
    onClose();
  };

  const onClickMyPage = (): void => {
    if (router.asPath.includes("admin")) {
      void router.push("/admin/adminPage");
    } else {
      void router.push("/user/mypage");
    }
    onClose();
  };

  const onClickMain = (): void => {
    void router.push("/user");
    onClose();
  };

  const showModal = (): void => {
    setIsModal(true);
  };

  const onClickDeleteAdmin = async (): Promise<void> => {
    const result = await deleteAdmin();
    console.log(result);
    onClose();
  };

  const onClickLogin = (): void => {
    void router.push("user/login");
    onClose();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(script);
    script.onload = () => {};

    if (localStorage.getItem("loginType") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Wrapper
        style={{
          marginBottom: router.pathname === "/user" ? "0px" : "65px",
          backgroundColor: router.pathname === "/user" ? "#40e0d0" : "#40e0d0",
        }}
      >
        <S.LightWrapper>
          <S.Logo src="/로고오.png"></S.Logo>
        </S.LightWrapper>
        <S.RightWrapper>
          {!isLogin ? (
            <div></div>
          ) : (
            <S.ProfileWrapper>
              <S.ProfileIcon
                src={data?.fetchLoginUser.user_image}
              ></S.ProfileIcon>
              <S.Name>
                {localStorage.getItem("loginType") === "user"
                  ? data?.fetchLoginUser.user_name
                  : dataAdmin?.fetchLoginAdminister.administer_name}
              </S.Name>
              <S.Text>님 안녕하세요!</S.Text>
              {/* {localStorage.getItem("loginType") === "user" ? (
                <S.PayButton onClick={showModal}>충전</S.PayButton>
              ) : (
                <></>
              )} */}
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
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <S.MenuListWrapper>
              {isLogin ? <></> : <p onClick={onClickLogin}>로그인</p>}
              <p onClick={onClickMyPage}>내 정보</p>
              {/* {localStorage.getItem("loginType") === "user" ? (
                <p onClick={showModal}>충전</p>
              ) : (
                <></>
              )} */}
              <p onClick={onClickMain}>스카찾기</p>

              {!isLogin ? (
                <></>
              ) : (
                <p onClick={wrapAsync(onClickLogOut)}>로그아웃</p>
              )}
              <p onClick={wrapAsync(onClickDeleteAdmin)}>회원탈퇴</p>
            </S.MenuListWrapper>
          </S.MenuDrawer>
        </S.RightWrapper>
      </Wrapper>

      {/* 여기서부터 결제 쪽입니다. */}
      <PayModal isPayModal={isModal} setIsPayModal={setIsModal}></PayModal>
    </>
  );
}
