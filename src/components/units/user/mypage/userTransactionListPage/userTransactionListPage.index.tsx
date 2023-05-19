import TransactionListBody from "./body/TransactionListBody.index";
import TransactionListHeader from "./header/TransactionListHeader.index";

export default function TransactionListPage(): JSX.Element {
  return (
    <>
      <TransactionListHeader />
      <TransactionListBody />
    </>
  );
}
