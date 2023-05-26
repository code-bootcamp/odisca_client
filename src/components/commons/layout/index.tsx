import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/header.index";

interface IProps {
  children: JSX.Element;
}

const HIDDEN_HEADER = [
  "/user/login",
  "/user/signup",
  "/admin/login",
  "/admin/signup",
  "/",
  "/admin",
];

const Wrapper = styled.div``;
const Contents = styled.div``;
const Children = styled.div``;

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname);
  // const isMainPage = router.pathname === "/user/main";
  // const shouldExcludeMargin = isMainPage && !isHiddenHeader;
  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <LayoutHeader />}
        <Contents>
          <Children>{props.children}</Children>
        </Contents>
      </Wrapper>
    </>
  );
}
