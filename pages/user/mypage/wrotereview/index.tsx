// 유저 내 리뷰 관리 페이지

import { withAuthUser } from "../../../../src/commons/libraries/withAuthUser";
import WroteReview from "../../../../src/components/units/user/mypage/wrotereview";

function WroteReviewPage(): JSX.Element {
  return <WroteReview />;
}
export default withAuthUser(WroteReviewPage);
