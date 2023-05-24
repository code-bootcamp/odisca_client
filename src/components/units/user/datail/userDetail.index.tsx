import { useRouter } from "next/router";
import { useQueryFetchOneStudyCafeForUser } from "../../../commons/hooks/queries/useQueryFetchStudyCafeForUser";
import UserDetailBody from "./body/UserDetailBody.index";
import UserDetailFooter from "./footer/UserDetailFooter.index";
import UserDetailHeader from "./header/UserDetailHeader.index";

export default function UserDetail(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchOneStudyCafeForUser(String(router.query.Id));

  return (
    <>
      <UserDetailHeader
        cafeName={data?.fetchOneStudyCafeForUser.studyCafe_name ?? ""}
      />
      <UserDetailBody
        cafeDescription={
          data?.fetchOneStudyCafeForUser.studyCafe_description ?? ""
        }
        cafeOpenTime={data?.fetchOneStudyCafeForUser.studyCafe_openTime ?? ""}
        cafeCloseTime={data?.fetchOneStudyCafeForUser.studyCafe_closeTime ?? ""}
        cafeContact={data?.fetchOneStudyCafeForUser.studyCafe_contact ?? ""}
        cafeAddress={data?.fetchOneStudyCafeForUser.studyCafe_address ?? ""}
      />
      <UserDetailFooter />
    </>
  );
}
