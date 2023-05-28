import { withAuth } from "../../../../src/commons/libraries/withAuth";
import TransactionListPage from "../../../../src/components/units/user/mypage/userTransactionListPage/userTransactionListPage.index";

function userTransactionListPage(): JSX.Element {
  return <TransactionListPage />;
}

export default withAuth(userTransactionListPage);
