// 유저 내 리뷰 관리 페이지

import { withAuthUser } from "../../../../src/commons/libraries/withAuthUser";
import UserReview from "../../../../src/components/units/user/mypage/userReview/userReview.index";

function WroteReviewPage(): JSX.Element {
  return <UserReview />;
}
export default withAuthUser(WroteReviewPage);
