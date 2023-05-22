// admin 수정

import { useRouter } from "next/router";
import { useQueryFetchStudyCafe } from "../../../../src/components/commons/hooks/queries/useQueryFetchStudyCafe";
import AdminWrite from "../../../../src/components/units/admin/write/adminWrite.index";

export default function AdminEditPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchStudyCafe({
    variables: { studyCafeId: router.query.Id },
  });

  return <AdminWrite isEdit={true} data={data} />;
}
