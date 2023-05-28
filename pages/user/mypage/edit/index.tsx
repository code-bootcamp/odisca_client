// 유저 회원정보 수정 페이지

import { withAuthUser } from "../../../../src/commons/libraries/withAuthUser";
import UserEdit from "../../../../src/components/units/user/mypage/userEditpage/userEditpage.index";

function UserEditPage(): JSX.Element {
  return <UserEdit />;
}
export default withAuthUser(UserEditPage);
