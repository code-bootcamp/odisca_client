import * as S from "./header.style";
import React, { useState } from "react";
import { Space } from "antd";

export default function LayoutHeader(): JSX.Element {
  const [open, setOpen] = useState(false);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

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
    </>
  );
}
