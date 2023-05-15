import AdminPageBody from "./body/adminPagebody.index";
import AdiminPageHeader from "./header/adminPageheader.index";

export default function AdminPage(): JSX.Element {
  return (
    <>
      <AdiminPageHeader />
      <AdminPageBody />
    </>
  );
}
