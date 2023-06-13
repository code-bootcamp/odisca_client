// import * as S from "./userMypagefooter.styles";

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

export default function Orgchart(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          {" "}
          탭1{" "}
        </li>
      ),
      tabCont: <div> 탭1 내용 </div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          {" "}
          탭2{" "}
        </li>
      ),
      tabCont: <div> 탭2 내용 </div>,
    },
  ];

  return (
    <div>
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}
