import { useRouter } from "next/router";
import { useQueryFetchStudyCafes } from "../../../commons/hooks/queries/useQueryFetchStudyCafe";
import AdminDetailBody from "./body/AdminDetailBody.index";
import AdminDetailFooter from "./footer/AdminDetailFooter.index";
import AdminDetailHeader from "./header/AdminDetailHeader.index";

export default function AdminDetail(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchStudyCafes(String(router.query.Id));
  console.log(data);
  return (
    <>
      <AdminDetailHeader
        cafeName={data?.fetchStudyCafe.name}
        cafeBrn={data?.fetchStudyCafe.brn}
        cafeContact={data?.fetchStudyCafe.contact}
        cafeFee={data?.fetchStudyCafe.timeFee}
        cafeOpenTime={data?.fetchStudyCafe.openTime}
        cafeClosTime={data?.fetchStudyCafe.closeTime}
      />
      <AdminDetailBody cafeDescription={data?.fetchStudyCafe.description} />
      <AdminDetailFooter />
    </>
  );
}
