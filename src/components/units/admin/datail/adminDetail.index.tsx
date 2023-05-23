import { useRouter } from "next/router";
import { useQueryFetchOneStudyCafe } from "../../../commons/hooks/queries/useQueryFetchStudyCafeForAdmin";
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
        cafeName={data?.fetchOneStudyCafeForAdminister.studyCafe_name}
        cafeBrn={data?.fetchOneStudyCafeForAdminister.studyCafe_brn}
        cafeContact={data?.fetchOneStudyCafeForAdminister.studyCafe_contact}
        cafeFee={data?.fetchOneStudyCafeForAdminister.studyCafe_timeFee}
        cafeOpenTime={data?.fetchOneStudyCafeForAdminister.studyCafe_openTime}
        cafeClosTime={data?.fetchOneStudyCafeForAdminister.studyCafe_closeTime}
      />
      <AdminDetailBody
        cafeDescription={
          data?.fetchOneStudyCafeForAdminister.studyCafe_description
        }
      />
      <AdminDetailFooter />
    </>
  );
}
