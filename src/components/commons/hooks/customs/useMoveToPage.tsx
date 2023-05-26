import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  // path기록시 글로벌스테이트에 저장할 것

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 로그인페이지일 때는 set(저장)하지 않도록 조건이 추가되야 함.
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
