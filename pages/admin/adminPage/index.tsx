import { withAuth } from "../../../src/commons/libraries/withAuth";
import AdminPage from "../../../src/components/units/admin/adminpage/adminPage.index";

function AdminPagePage(): any {
  return <AdminPage />;
}

export default withAuth(AdminPagePage);
