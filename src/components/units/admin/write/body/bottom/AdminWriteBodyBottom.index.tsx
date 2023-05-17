import * as S from "./AdminWriteBodyBottom.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { cafeWriteSchema } from "../../../../../../commons/writeValidation/validation";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
// import { useCreateLoginStudyCafe } from "../../../../../commons/hooks/customs/useCreateLoginStudyCafe";
import { useMutationCreateLoginStudyCafe } from "../../../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import { useForm } from "react-hook-form";

export default function AdminWriteBodyBottom(): JSX.Element {
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(cafeWriteSchema),
  });

  // const { onClickCafeSubmit } = useCreateLoginStudyCafe({});
  const onClickCafeSubmit = async (data): Promise<void> => {
    try {
      const result = await createLoginStudyCafe({
        variables: {
          createStudyCafeInput: {
            name: data.name,
            address: data.address,
            contact: data.contact,
            timeFee: Number(data.timeFee),
            description: String(data.description),
            operatingTime: data.operatingTime,
            lat: data.lat,
            lon: data.lon,
            brn: data.brn,
          },
        },
      });
      console.log(result);
      alert("상품등록이 완료되었습니다.");
      void router.push(`/admin/${result.data?.createLoginStudyCafe.id}`);
    } catch (error) {
      alert("업체등록에 실패하였습니다");
    }
  };

  return (
    <form
      onSubmit={
        // props.isEdit
        // ? wrapFormAsync(handleSubmit(onClickUpdate))
        // wrapFormAsync(handleSubmit(onClickCafeSubmit(data)))
        wrapFormAsync(handleSubmit(onClickCafeSubmit))
      }
    >
      <S.SectionBottom>
        <S.SectionBox>
          <S.Label>이용 요금표</S.Label>
          <S.InputBox>
            <S.Input type="text" placeholder="시간 당" />

            <S.Input type="text" placeholder="원" {...register("timeFee")} />
          </S.InputBox>
        </S.SectionBox>
        <S.SectionBox>
          <S.Label>이용안내 및 설명</S.Label>
          <S.Notice type="text" {...register("description")} />
        </S.SectionBox>
      </S.SectionBottom>
    </form>
  );
}
