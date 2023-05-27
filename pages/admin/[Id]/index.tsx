// 유저 카페 상세페이지 테스트중
import { withAuth } from "../../../src/commons/libraries/withAuth";
import AdminDetail from "../../../src/components/units/admin/datail/adminDetail.index";

function adminDetailPage(): JSX.Element {
  return <AdminDetail />;
}

export default withAuth(adminDetailPage);
