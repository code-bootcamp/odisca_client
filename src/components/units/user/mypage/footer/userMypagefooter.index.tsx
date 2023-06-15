import * as S from "./userMypagefooter.styles";

// import { Fragment, MouseEvent } from "react";
// import { useRouter } from "next/router";

// const NAVIGATION_MENUS = [
//   { name: "작성 가능한 리뷰", page: "/user/mypage/createreview" },
//   { name: "작성한 리뷰", page: "/user/mypage/wrotereview" },
// ];

// export default function UserMyPageFooter(): JSX.Element {
//   const router = useRouter();

//   const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
//     void router.push(event.currentTarget.id);
//   };

//   return (
//     <S.Wrapper>
//       {NAVIGATION_MENUS.map((el) => (
//         <Fragment key={el.page}>
//           <S.MenuItem id={el.page} onClick={onClickMenu}>
//             {el.name}
//           </S.MenuItem>
//         </Fragment>
//       ))}
//     </S.Wrapper>
//   );
// }

import { useState } from "react";
import UserMyPageBody from "../body/userMypagebody.index";
import UserReview from "../userReview/userReview.index";

export default function Orgchart(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <S.MenuList
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          이용내역
        </S.MenuList>
      ),
      tabContent: <UserMyPageBody />,
    },
    {
      tabTitle: (
        <S.MenuList
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          작성한 리뷰
        </S.MenuList>
      ),
      tabContent: <UserReview />,
    },
  ];

  return (
    <S.Wrapper>
      <S.MenuListWrapper>
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </S.MenuListWrapper>
      <div>{tabContArr[activeIndex].tabContent}</div>
    </S.Wrapper>
  );
}
