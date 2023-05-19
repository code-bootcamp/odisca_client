import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import { useQueryFetchLoginStudyCafes } from "../../../commons/hooks/queries/useQueryFetchLoginStudyCafes";
import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  const { data: dataUser } = useQueryFetchLoginAdminister();
  const { data } = useQueryFetchLoginStudyCafes(
    dataUser?.fetchLoginAdminister.id ?? ""
  );
  console.log(data, dataUser?.fetchLoginAdminister.id);
  return (
    <>
      <AdiminPageHeader
        adminName={dataUser?.fetchLoginAdminister.name}
        adminPoint={dataUser?.fetchLoginAdminister.point}
        adminMail={dataUser?.fetchLoginAdminister.email}
      />
      <AdminPageBody data={data} />
    </>
  );
}
