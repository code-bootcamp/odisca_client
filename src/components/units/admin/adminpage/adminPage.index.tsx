import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  const { data } = useQueryFetchLoginAdminister();
  return (
    <>
      <AdiminPageHeader
        adminName={data?.fetchLoginAdminister.administer_name}
        adminPoint={data?.fetchLoginAdminister.administer_point}
        adminMail={data?.fetchLoginAdminister.administer_email}
      />
      <AdminPageBody data={data} />
    </>
  );
}
