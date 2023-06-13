// 유저 리뷰 작성 페이지

import { withAuthUser } from "../../../../src/commons/libraries/withAuthUser";
import CreateReview from "../../../../src/components/units/user/mypage/createreview";

function CreateReviewPage(): JSX.Element {
  return <CreateReview />;
}
export default withAuthUser(CreateReviewPage);
