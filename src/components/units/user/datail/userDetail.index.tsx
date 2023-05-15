import UserDetailBody from "./body/UserDetailBody.index";
import UserDetailFooter from "./footer/UserDetailFooter.index";
import UserDetailHeader from "./header/UserDetailHeader.index";

export default function UserDetail(): JSX.Element {
  return (
    <>
      <UserDetailHeader />
      <UserDetailBody />
      <UserDetailFooter />
    </>
  );
}
