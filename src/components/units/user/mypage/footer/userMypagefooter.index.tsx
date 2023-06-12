import * as S from "./userMypagefooter.styles";

import { Fragment, MouseEvent } from "react";
import { useRouter } from "next/router";

const NAVIGATION_MENUS = [
  { name: "작성 가능한 리뷰", page: "/user/mypage/createreview" },
  { name: "작성한 리뷰", page: "/user/mypage/wrotereview" },
];

export default function UserMyPageFooter(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
