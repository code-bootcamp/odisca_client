import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  const { data: dataUser } = useQueryFetchLoginAdminister();

  return (
    <>
      <AdiminPageHeader
        adminName={dataUser?.fetchLoginAdminister.name}
        adminPoint={dataUser?.fetchLoginAdminister.point}
        adminMail={dataUser?.fetchLoginAdminister.email}
      />
      <AdminPageBody />
    </>
  );
}
