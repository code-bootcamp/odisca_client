import { useState } from "react";

export const usePagination = (
  args: any
): {
  startPage: number;
  lastPage: number;
  onClickPage: (page: number) => () => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
} => {
  const [startPage, setStartPage] = useState(1);
  const lastPage =
    typeof args.count === "number"
      ? Math.ceil(args.count / 10)
      : (0 as any as number);

  const onClickPage = (page: number) => (): void => {
    void args.refetch({ page });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void args.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void args.refetch({ page: startPage + 10 });
    }
  };

  return {
    startPage,
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
