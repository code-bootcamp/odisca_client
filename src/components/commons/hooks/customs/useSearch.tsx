import { ChangeEvent, useState } from "react";
import _ from "lodash";

// 검색관련로직
export const useSearch = (
  args: any
): {
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    void args.refetchCount({ search: value });
    onChangeKeyword(value);
  }, 300);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return { keyword, onChangeKeyword, onChangeSearchbar };
};
