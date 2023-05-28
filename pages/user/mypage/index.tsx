import { withAuthUser } from "../../../src/commons/libraries/withAuthUser";
import UserMyPage from "../../../src/components/units/user/mypage/userMypage.index";

function userMyPagePage(): JSX.Element {
  return <UserMyPage />;
}
export default withAuthUser(userMyPagePage);
