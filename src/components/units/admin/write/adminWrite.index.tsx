import DaumPostcodeEmbed from "react-daum-postcode";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { cafeWriteSchema } from "../../../../commons/writeValidation/validation";
import UseModal from "../../../commons/hooks/customs/useModal";
import { useMutationCreateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import * as S from "./adminWrite.styles";
import OperatingTime from "../../../commons/operatingTimeSelection/operatingTimeSelect.index";

interface IFormValues {
  name: string;
  contact: string;
  timeFee: number;
  description: string;
  brn: string;
  image: {
    url: string;
    isMain: boolean;
  };
}

declare const window: typeof globalThis & {
  kakao: any;
};

export default function AdminWrite(): JSX.Element {
  const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();

  useEffect(() => {
    const script = document.createElement("script"); // script tag 만들기
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=12e2554bb6ebf42463e132c31315b011&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소-좌표 변환 객체를 생성합니다
        geocoder.addressSearch(`${address}`, function (result, status) {
          // 주소로 좌표를 검색합니다

          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].x,
              result[0].y
            );
            setLat(result[0].x);
            setLon(result[0].y);
          }
        });
      });
    };
  }, [address, lon, lat]);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(cafeWriteSchema),
  });
  // const { onClickCafeSubmit } = useCreateLoginStudyCafe({});

  const AddressDetailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(event.target.value);
  };

  const onChangeSelectOpenTime = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setOpenTime(event?.target.value);
  };

  const onChangeSelectCloseTime = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setCloseTime(event?.target.value);
  };

  const onCompleteAddressSearch = (AddressData): void => {
    handleCancel();
    setZipcode(AddressData.zonecode);
    setAddress(AddressData.address);
    setCity(AddressData.sido);
    setDistrict(AddressData.sigungu);
    console.log(AddressData);
  };

  const onClickCafeSubmit = async (data: IFormValues): Promise<void> => {
    try {
      console.log(
        data,
        address,
        addressDetail,
        city,
        district,
        openTime,
        closeTime,
        lat,
        lon
      );
      const result = await createLoginStudyCafe({
        variables: {
          createStudyCafeInput: {
            name: data.name,
            address,
            addressDetail,
            city,
            district,
            contact: data.contact,
            timeFee: Number(data.timeFee),
            description: String(data.description),
            openTime,
            closeTime,
            lat: Number(lat),
            lon: Number(lon),
            brn: data.brn,
            // image: [
            //   url: ,
            //   isMain: ,
            // ]
          },
        },
      });
      alert("업체등록이 완료되었습니다.");
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
          <div id="map" style={{ display: "none" }}></div>
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
                placeholder="상세주소를 입력해주세요."
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
            <OperatingTime
              onChangeSelectOpenTime={onChangeSelectOpenTime}
              onChangeSelectCloseTime={onChangeSelectCloseTime}
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
          <S.Btn>등록하기</S.Btn>
          <S.Btn type="button">취소하기</S.Btn>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}
