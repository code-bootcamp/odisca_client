import AdminWriteBody from "./body/AdminWriteBody.index";
import AdminWriteFooter from "./footer/AdminWriteFooter.index";
import AdminWriteHeader from "./header/AdminWriteHeader.index";

export default function AdminWrite(): JSX.Element {
  return (
    <>
      <AdminWriteHeader />
      <AdminWriteBody />
      <AdminWriteFooter />
    </>
  );
}
