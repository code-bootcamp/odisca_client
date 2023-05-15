import AdminDetailBody from "./body/AdminDetailBody.index";
import AdminDetailFooter from "./footer/AdminDetailFooter.index";
import AdminDetailHeader from "./header/AdminDetailHeader.index";

export default function AdminDetail(): JSX.Element {
  return (
    <>
      <AdminDetailHeader />
      <AdminDetailBody />
      <AdminDetailFooter />
    </>
  );
}
