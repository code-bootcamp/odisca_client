import * as S from "./header.style";
import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { FETCH_LOGIN_USER } from "./header.queries";
import { useQuery } from "@apollo/client";

export default function LayoutHeader(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const { data } = useQuery(FETCH_LOGIN_USER);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.LightWrapper>
          <S.Logo src="/logo.png"></S.Logo>
        </S.LightWrapper>
        <S.RightWrapper>
          {!isLogin ? (
            <div></div>
          ) : (
            <S.ProfileWrapper>
              <S.ProfileIcon src="/ProfileIcon.png"></S.ProfileIcon>
              <S.Name>{data?.fetchLoginUser.name}</S.Name>
              <S.Text>님 안녕하세요!</S.Text>
            </S.ProfileWrapper>
          )}

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
    </>
  );
}
