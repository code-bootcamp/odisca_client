import { useRouter } from "next/router";
import { useQueryFetchOneStudyCafe } from "../../../commons/hooks/queries/useQueryFetchStudyCafe";
import AdminDetailBody from "./body/AdminDetailBody.index";
import AdminDetailFooter from "./footer/AdminDetailFooter.index";
import AdminDetailHeader from "./header/AdminDetailHeader.index";

export default function AdminDetail(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchOneStudyCafe(String(router.query.Id));
  console.log(data, String(router.query.Id));
  return (
    <>
      <AdminDetailHeader
        cafeName={data?.fetchOneStudyCafe.studyCafe_name}
        cafeBrn={data?.fetchOneStudyCafe.studyCafe_brn}
        cafeContact={data?.fetchOneStudyCafe.studyCafe_contact}
        cafeFee={data?.fetchOneStudyCafe.studyCafe_timeFee}
        cafeOpenTime={data?.fetchOneStudyCafe.studyCafe_openTime}
        cafeClosTime={data?.fetchOneStudyCafe.studyCafe_closeTime}
      />
      <AdminDetailBody
        cafeDescription={data?.fetchOneStudyCafe.studyCafe_description}
      />
      <AdminDetailFooter />
    </>
  );
}
