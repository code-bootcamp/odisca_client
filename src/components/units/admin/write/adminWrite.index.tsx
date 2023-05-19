import DaumPostcodeEmbed from "react-daum-postcode";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { cafeWriteSchema } from "../../../../commons/writeValidation/validation";
import UseModal from "../../../commons/hooks/customs/useModal";
import { useMutationCreateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import * as S from "./adminWrite.styles";
import OperatingTime from "../../../commons/operatingTimeSelection/operatingTimeSelect.index";

interface IFormValues {
  name: string;
  address: string;
  contact: string;
  timeFee: number;
  description: string;
  openTime: string;
  closeTime: string;
  lat: number;
  lon: number;
  brn: string;
  image: {
    url: string;
    isMain: boolean;
  };
}

export default function AdminWrite(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(cafeWriteSchema),
  });
  // const { onClickCafeSubmit } = useCreateLoginStudyCafe({});

  const AddressDetailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(event.target.value);
  };

  const onCompleteAddressSearch = (AddressData): void => {
    handleCancel();
    setZipcode(AddressData.zonecode);
    setAddress(AddressData.address);
    console.log(AddressData);
  };

  const onClickCafeSubmit = async (data: IFormValues): Promise<void> => {
    try {
      console.log(data, "data");

      const result = await createLoginStudyCafe({
        variables: {
          createStudyCafeInput: {
            name: data.name,
            // address 수정 필요. addressDetail 넣을 것인지 결정 필요(백엔드와 협의)
            address,
            contact: data.contact,
            timeFee: Number(data.timeFee),
            description: String(data.description),
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
      alert("업체등록에 실패하였습니다.");
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
              <S.Label>대표자명</S.Label>
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
              <S.Zipcode
                type="text"
                placeholder="07250"
                value={zipcode}
                readOnly
              ></S.Zipcode>
              <S.SearchBtn type="button" onClick={showModal}>
                검색
              </S.SearchBtn>
              {isModalOpen ? (
                <S.AddressSearchModal
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
                </S.AddressSearchModal>
              ) : (
                <></>
              )}
            </S.AddressZip>
            <S.AddressBox>
              <S.Address type="text" value={address} readOnly />
              <S.Address
                type="text"
                defaultValue={addressDetail}
                onChange={AddressDetailInput}
              />
            </S.AddressBox>
          </S.AddressInputBox>
        </S.AddressSectionBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>영업시간</S.Label>
            </S.LabelBox>
            <OperatingTime />
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
              <S.Input
                type="text"
                placeholder="ex) 3,000원"
                {...register("timeFee")}
              />
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
