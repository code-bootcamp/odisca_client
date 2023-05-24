import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import { useQueryAllStudyCafesByAdminId } from "../../../commons/hooks/queries/useQueryFetchAllStudyCafesByAdminId";
import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  const { data } = useQueryFetchLoginAdminister();
  // const { data } = useQueryAllStudyCafesByAdminId(
  //   dataUser?.fetchLoginAdminister.administer.administer_id ?? ""
  // );
  console.log(data);
  return (
    <>
      <AdiminPageHeader
        adminName={data?.fetchLoginAdminister.administer.administer_name}
        adminPoint={data?.fetchLoginAdminister.administer.administer_point}
        adminMail={data?.fetchLoginAdminister.administer.administer_email}
      />
      <AdminPageBody data={data} />
    </>
  );
}
