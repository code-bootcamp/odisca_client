import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "./header/header.index";

const HIDDEN_HEADER = [
  "/user/login",
  "/user/signup",
  "/admin/login",
  "/admin/signup",
];

export const Wrapper = styled.div``;

export const Contents = styled.div``;

export const Children = styled.div``;

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
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
