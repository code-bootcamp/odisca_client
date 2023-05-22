// admin 수정

import { useRouter } from "next/router";
import { useQueryFetchOneStudyCafe } from "../../../../src/components/commons/hooks/queries/useQueryFetchStudyCafe";
import AdminWrite from "../../../../src/components/units/admin/write/adminWrite.index";

export default function AdminEditPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQueryFetchOneStudyCafe({
    variables: { studyCafe_id: router.query.Id },
  });

  return <AdminWrite isEdit={true} data={data} />;
}
