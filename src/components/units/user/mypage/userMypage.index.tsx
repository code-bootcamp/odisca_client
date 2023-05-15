import UserMyPageBody from "./body/userMypagebody.index";
import UserMyPageHeader from "./header/userMypageheader.index";

export default function UserMyPage(): JSX.Element {
  return (
    <>
      <UserMyPageHeader />
      <UserMyPageBody />
    </>
  );
}
