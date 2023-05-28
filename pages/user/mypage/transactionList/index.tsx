import { withAuthUser } from "../../../../src/commons/libraries/withAuthUser";
import TransactionListPage from "../../../../src/components/units/user/mypage/userTransactionListPage/userTransactionListPage.index";

function userTransactionListPage(): JSX.Element {
  return <TransactionListPage />;
}

export default withAuthUser(userTransactionListPage);
