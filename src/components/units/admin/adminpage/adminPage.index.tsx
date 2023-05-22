import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import { useQueryAllStudyCafesByAdminId } from "../../../commons/hooks/queries/useQueryFetchAllStudyCafesByAdminId";
import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  const { data: dataUser } = useQueryFetchLoginAdminister();
  const { data } = useQueryAllStudyCafesByAdminId(
    dataUser?.fetchLoginAdminister.administer_id ?? ""
  );
  console.log(data, dataUser);
  return (
    <>
      <AdiminPageHeader
        adminName={dataUser?.fetchLoginAdminister.administer_name}
        adminPoint={dataUser?.fetchLoginAdminister.administer_point}
        adminMail={dataUser?.fetchLoginAdminister.administer_email}
      />
      <AdminPageBody data={data} />
    </>
  );
}
