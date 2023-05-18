import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { cafeWriteSchema } from "../../../../commons/writeValidation/validation";
import { useMutationCreateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import * as S from "./adminWrite.styles";

export default function AdminWrite(): JSX.Element {
  const router = useRouter();
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(cafeWriteSchema),
  });
  // const { onClickCafeSubmit } = useCreateLoginStudyCafe({});

  const onClickCafeSubmit = async (data): Promise<void> => {
    try {
      console.log(data, "data");

      const result = await createLoginStudyCafe({
        variables: {
          createStudyCafeInput: {
            name: data.name,
            address: "서울시 구로구",
            contact: data.contact,
            timeFee: Number(data.timeFee),
            description: String(data.description),
            // operatingTime: data.operatingTime,
            openTime: "3",
            closeTime: "3",
            lat: 123.12,
            lon: 45.67,
            brn: data.brn,
          },
        },
      });
      console.log(result, "result");
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
      <S.Wrapper>
        <S.Header>
          <S.Title>업체 등록하기</S.Title>
        </S.Header>
        {/* <S.SectionTop> */}
        <S.SectionTopBox>
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
        </S.SectionTopBox>
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
        {/* </S.SectionTop> */}
        <S.SectionMiddle>
          <S.ImageSection>
            <S.Label>카페 내부 사진</S.Label>
            <S.ImageListBox>
              <S.ImageListOne>
                <S.ImageBox>
                  <S.Icon />
                </S.ImageBox>
                <S.ImageBox>
                  <S.Icon />
                </S.ImageBox>
              </S.ImageListOne>
              <S.ImageListTwo>
                <S.ImageBox>
                  <S.Icon />
                </S.ImageBox>
                <S.ImageBox>
                  <S.Icon />
                </S.ImageBox>
                <S.ImageBox>
                  <S.Icon />
                </S.ImageBox>
              </S.ImageListTwo>
            </S.ImageListBox>
          </S.ImageSection>
        </S.SectionMiddle>
        <S.SectionBottom>
          <S.SectionBox>
            <S.Label>이용 요금표</S.Label>
            <S.InputBox>
              <S.Hour>시간 당</S.Hour>
              <S.Input type="text" placeholder="원" {...register("timeFee")} />
              <S.Error>{formState.errors.timeFee?.message}</S.Error>
            </S.InputBox>
          </S.SectionBox>
          <S.SectionBox>
            <S.Label>이용안내 및 설명</S.Label>
            <S.Notice type="text" {...register("description")} />
          </S.SectionBox>
        </S.SectionBottom>
        <S.Footer>
          <S.Btn isActive={formState.isValid}>등록하기</S.Btn>
          <S.Btn>취소하기</S.Btn>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}
