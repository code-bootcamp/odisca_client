// admin 수정

import { useRouter } from "next/router";
import { useQueryFetchOneStudyCafeForAdmin } from "../../../../src/components/commons/hooks/queries/useQueryFetchStudyCafeForAdmin";
import AdminWrite from "../../../../src/components/units/admin/write/adminWrite.index";

export default function AdminEditPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchOneStudyCafeForAdmin(String(router.query.Id));

  console.log(data, "didkdkdkdkdkdkd");

  return <AdminWrite isEdit={true} data={data} />;
}
