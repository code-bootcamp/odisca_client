// 업체 등록하기
import { withAuth } from "../../../src/commons/libraries/withAuth";
import AdminWrite from "../../../src/components/units/admin/write/adminWrite.index";

function AdminWritePage(): JSX.Element {
  return <AdminWrite isEdit={false} />;
}
export default withAuth(AdminWritePage);
