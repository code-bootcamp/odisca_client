import * as S from "./AdminWriteBodyTop.styles";
import { useMutationCreateLoginStudyCafe } from "../../../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { cafeWriteSchema } from "../../../../../../commons/writeValidation/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AdminWriteBodyTop(): JSX.Element {
  const router = useRouter();
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
      <S.SectionTop>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>대표자 명</S.Label>
            </S.LabelBox>
            <S.Input type="text" placeholder="ex) 홍길동" />
          </S.InputBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label> 사업자번호</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              placeholder="ex) 000-000-000"
              {...register("brn")}
              // defaultvalue={data?.fetchLoginStudyCafe.brn}
            />
            <S.Error>{formState.errors.brn?.message}</S.Error>
          </S.InputBox>
        </S.SectionBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>업체명</S.Label>
            </S.LabelBox>
            <S.Input type="text" {...register("name")} />
            <S.Error>{formState.errors.name?.message}</S.Error>
          </S.InputBox>
        </S.SectionBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>연락처</S.Label>
            </S.LabelBox>
            <S.Input type="text" {...register("contact")} />
            <S.Error>{formState.errors.contact?.message}</S.Error>
          </S.InputBox>
        </S.SectionBox>
        <S.AddressSectionBox>
          <S.AddressLabel>주소</S.AddressLabel>
          <S.AddressInputBox>
            <S.AddressZip>
              <S.Zipcode type="text" placeholder="07250"></S.Zipcode>
              <S.SearchBtn>검색</S.SearchBtn>
            </S.AddressZip>
            <S.AddressBox>
              <S.Address type="text" />
              <S.Address type="text" />
            </S.AddressBox>
          </S.AddressInputBox>
        </S.AddressSectionBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>영업시간</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              placeholder="매일 07:00 - 24:00"
              {...register("operatingTime")}
            />
          </S.InputBox>
        </S.SectionBox>
      </S.SectionTop>
    </form>
  );
}
