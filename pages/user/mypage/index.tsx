import { withAuth } from "../../../src/commons/libraries/withAuth";
import UserMyPage from "../../../src/components/units/user/mypage/userMypage.index";

function userMyPagePage(): JSX.Element {
  return <UserMyPage />;
}
export default withAuth(userMyPagePage);
