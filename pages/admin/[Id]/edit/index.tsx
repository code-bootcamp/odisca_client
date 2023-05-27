import { withAuth } from "../../../../src/commons/libraries/withAuth";
import AdminWrite from "../../../../src/components/units/admin/write/adminWrite.index";

function AdminEditPage(): JSX.Element {
  return <AdminWrite isEdit={true} />;
}
export default withAuth(AdminEditPage);
