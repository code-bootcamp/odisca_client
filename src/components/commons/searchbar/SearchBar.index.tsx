import { ChangeEvent } from "react";
import { Searchbar, SearchbarInput } from "./SearchBar.styles";

interface ISearchbarProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(props: ISearchbarProps): JSX.Element {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="🔍 카페명을 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
