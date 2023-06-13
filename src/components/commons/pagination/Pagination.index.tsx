import { Page } from "./Pagination.styles";

interface IPaginationProps {
  startPage: number;
  lastPage: number;
  onClickPage: (page: number) => () => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage(props.startPage + index)}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
