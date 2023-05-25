// 라이브러리
import DaumPostcodeEmbed from "react-daum-postcode";

// hooks
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutationCreateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import { useMutationUpdateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationUpdateLoginStudyCafe";
import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import { useMutationUploadImageFile } from "../../../commons/hooks/mutations/useMutationUploadImageFile";

// 검증 및 설정
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { cafeWriteSchema } from "../../../../commons/writeValidation/validation";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import * as S from "./adminWrite.styles";
import OperatingTime from "../../../commons/operatingTimeSelection/operatingTimeSelect.index";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import SubmitSuccessAlertModal from "../../../commons/submitSuccessModal/submitSuccessModal.index";

// 등록 사항들 타입 지정
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

export default function AdminWrite(props): JSX.Element {
  // const { showModal, handleOk, handleCancel, isModalOpen } = UseModal();

  // router
  const router = useRouter();

  // useState
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", "", ""]);
  const [files, setFiles] = useState([]);
  const [imageButtonArray] = useState(["", "", "", "", ""]);
  const [isMain, setIsMain] = useState([true, false, false, false, false]);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // useRef
  const fileRef = useRef<HTMLInputElement>(null);

  // useMutation(admin 등록)
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();
  const [updateLoginStudyCafe] = useMutationUpdateLoginStudyCafe();
  const [uploadImageFile] = useMutationUploadImageFile();

  // useQuery
  const { data: fetchAdministerData } = useQueryFetchLoginAdminister();

  // kakao map 사용해서 daumpostcode에서 선택한 주소의 위도와 경도 데이터 추출
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
        // 주소-좌표 변환 객체 생성
        geocoder.addressSearch(`${address}`, function (result, status) {
          // 주소로 좌표 검색

          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].x,
              result[0].y
            );
            setLat(result[0].y);
            setLon(result[0].x);
          }
        });
      });
    };
  }, [address, lon, lat]);

  // useForm 사용
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(cafeWriteSchema),
  });
  // const { onClickCafeSubmit } = useCreateLoginStudyCafe({});

  // AddressDetail 입력값
  const AddressDetailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(event.target.value);
  };

  // openTime Select
  const onChangeSelectOpenTime = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setOpenTime(event?.target.value);
  };

  // CloseTime Select
  const onChangeSelectCloseTime = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setCloseTime(event?.target.value);
  };

  const AddressModal = (): void => {
    setIsAddressModalOpen((prev) => !prev);
  };

  const SubmitModal = (): void => {
    setIsSubmitModalOpen((prev) => !prev);
  };

  // daumpostcode에서 주소 검색 완료 시 로직
  const onCompleteAddressSearch = (AddressData): void => {
    AddressModal();
    setAddress(AddressData.address);
    setCity(AddressData.sido);
    setDistrict(AddressData.sigungu);
    console.log(AddressData);
  };

  // + 버튼 클릭 시 이미지 파일 업로드
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = () => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(imageUrls);
        // imageUrls !== "" ? imageUrls :
        const newTemp = [...imageUrls.filter((el) => el !== "")];
        newTemp.push(event.target?.result);
        while (newTemp.length < 5) {
          newTemp.push("");
        }

        // console.log(newTemp, "newTemp");
        setImageUrls(newTemp);

        const tempFiles = [...files.filter((el) => el !== "")];
        tempFiles.push(file);
        while (tempFiles.length < 5) {
          tempFiles.push("");
        }
        setFiles(tempFiles);
        console.log(tempFiles, "tempFiles");
        console.log(event.target?.result);
      }
    };
  };

  // 등록하기 버튼 눌렀을 때(admin 등록)
  const onClickCafeSubmit = async (data: IFormValues): Promise<void> => {
    console.log(files, "파일이당");
    // const results = await Promise.all(
    //   files.map((el) => el && uploadImageFile({ variables: { images: el } }))
    // );
    const results = await uploadImageFile({
      variables: { images: files.filter((el) => el !== "") },
    });
    console.log(results, "results");

    const resultUrls = [];
    if (results) {
      // resultUrls = results.map((el, index) =>
      //   el ? el.data?.uploadImageFile[index] : ""
      // );
      for (let i = 0; i < results.data?.uploadImageFile.length; i++) {
        results.data?.uploadImageFile[i]
          ? resultUrls.push(results.data?.uploadImageFile[i])
          : "";
      }
    }
    console.log(results.data?.uploadImageFile[1]);
    console.log(resultUrls, "!!!!!");
    const images = resultUrls.map((el, index) => {
      return {
        image_url: el,
        image_isMain: isMain[index],
      };
    });

    try {
      const result = await createLoginStudyCafe({
        variables: {
          createStudyCafeInput: {
            studyCafe_name: data.name,
            studyCafe_address: address,
            studyCafe_addressDetail: addressDetail,
            studyCafe_city: city,
            studyCafe_district: district,
            studyCafe_contact: data.contact,
            studyCafe_timeFee: Number(data.timeFee),
            studyCafe_description: String(data.description),
            studyCafe_openTime: openTime,
            studyCafe_closeTime: closeTime,
            studyCafe_lat: Number(lat),
            studyCafe_lon: Number(lon),
            studyCafe_brn: data.brn,
            image: images,
          },
        },
      });
      setIsSubmitModalOpen(true);
      // void router.push(
      //   `/admin/${result.data?.createLoginStudyCafe.studyCafe_id}`
      // );
    } catch (error) {
      if (error instanceof Error) alert("업체 등록에 실패했습니다!");
    }
  };

  // 수정하기 버튼 눌렀을 때(admin 수정)
  const onClickUpdateCafe = async (data: IFormValues) => {
    const results = await uploadImageFile({
      variables: { images: files.filter((el) => el !== "") },
    });
    console.log(results, "results");

    const resultUrls = [];
    if (results) {
      for (let i = 0; i < results.data?.uploadImageFile.length; i++) {
        results.data?.uploadImageFile[i]
          ? resultUrls.push(results.data?.uploadImageFile[i])
          : "";
      }
    }
    console.log(results.data?.uploadImageFile[1]);
    console.log(resultUrls, "!!!!!");
    const images = resultUrls.map((el, index) => {
      return {
        image_url: el,
        image_isMain: isMain[index],
      };
    });

    try {
      const updateResult = await updateLoginStudyCafe({
        variables: {
          updateStudyCafeInput: {
            studyCafe_id: String(router.query.Id),
            studyCafe_name:
              data.name !== ""
                ? data.name
                : props.data.fetchOneStudyCafeForAdminister.studyCafe_name,
            studyCafe_address: address,
            studyCafe_addressDetail: addressDetail,
            studyCafe_city: city,
            studyCafe_district: district,
            studyCafe_contact:
              data.contact !== ""
                ? data.contact
                : props.data.fetchOneStudyCafeForAdminister.studyCafe_contact,

            studyCafe_timeFee:
              data.timeFee !== ""
                ? Number(data.timeFee)
                : props.data.fetchOneStudyCafeForAdminister.studyCafe_timeFee,

            studyCafe_description:
              data.description !== ""
                ? String(data.description)
                : props.data.fetchOneStudyCafeForAdminister.description,

            studyCafe_openTime: openTime,
            studyCafe_closeTime: closeTime,
            studyCafe_lat: Number(lat),
            studyCafe_lon: Number(lon),
            image: images,
          },
        },
      });
      console.log(updateResult);
      void router.push(
        `/admin/${updateResult.data?.updateLoginStudyCafe.studyCafe_id}`
      );
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 이미지 등록 시 메인 이미지 설정
  const onChangeCheckMain = (index: number) => (): void => {
    const newMain = new Array(5).fill(false);
    newMain[index] = true;
    setIsMain(newMain);
    console.log(newMain);
  };

  console.log(
    props.data?.fetchOneStudyCafeForAdminister.images[0].image_url,
    "집좀가자!!!!!!!!"
  );

  const onClickMoveCafeDetail = (): void => {
    void router.push(`/admin/${router.query.Id}`);
  };

  // return 값
  return (
    <form
      onSubmit={
        props.isEdit
          ? wrapFormAsync(handleSubmit(onClickUpdateCafe))
          : wrapFormAsync(handleSubmit(onClickCafeSubmit))
        // wrapFormAsync(handleSubmit(onClickCafeSubmit))
      }
    >
      <S.Wrapper>
        <S.Header>
          <S.Title>업체 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        </S.Header>
        {/* <S.SectionTop> */}
        <S.SectionTopBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>대표자명</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              readOnly
              defaultValue={
                fetchAdministerData?.fetchLoginAdminister.administer_name
              }
            />
          </S.InputBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label> 사업자번호</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              placeholder="ex) 000-000-000"
              {...register("brn")}
              value={props.data?.fetchOneStudyCafeForAdminister.studyCafe_brn}
            />
            <S.Error>{formState.errors.brn?.message}</S.Error>
          </S.InputBox>
        </S.SectionTopBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>업체명</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              {...register("name")}
              defaultValue={
                props.data?.fetchOneStudyCafeForAdminister.studyCafe_name
              }
            />
            <S.Error>{formState.errors.name?.message}</S.Error>
          </S.InputBox>
        </S.SectionBox>
        <S.SectionBox>
          <S.InputBox>
            <S.LabelBox>
              <S.Label>연락처</S.Label>
            </S.LabelBox>
            <S.Input
              type="text"
              {...register("contact")}
              defaultValue={
                props.data?.fetchOneStudyCafeForAdminister.studyCafe_contact
              }
            />
            <S.Error>{formState.errors.contact?.message}</S.Error>
          </S.InputBox>
        </S.SectionBox>
        <S.AddressSectionBox>
          <S.AddressLabel>주소</S.AddressLabel>
          <div id="map" style={{ display: "none" }}></div>
          <S.AddressInputBox>
            <S.AddressZip>
              {/* <S.Zipcode
                type="text"
                placeholder="07250"
                value={zipcode}
                readOnly
              ></S.Zipcode> */}
              <S.SearchBtn type="button" onClick={AddressModal}>
                주소검색
              </S.SearchBtn>
              {isAddressModalOpen ? (
                <S.AddressSearchModal
                  open={true}
                  onOk={AddressModal}
                  onCancel={AddressModal}
                >
                  <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
                </S.AddressSearchModal>
              ) : (
                <></>
              )}
            </S.AddressZip>
            <S.AddressBox>
              <S.Address
                type="text"
                readOnly
                value={
                  address !== ""
                    ? address
                    : props.data?.fetchOneStudyCafeForAdminister
                        .studyCafe_address ?? ""
                }
                // defaultValue={
                //   props.data?.fetchOneStudyCafeForAdminister.studyCafe_address
                // }
              />
              <S.Address
                placeholder="상세주소를 입력해주세요."
                type="text"
                defaultValue={
                  props.data?.fetchOneStudyCafeForAdminister
                    .studyCafe_addressDetail
                }
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
              data={props.data}
              onChangeSelectOpenTime={onChangeSelectOpenTime}
              onChangeSelectCloseTime={onChangeSelectCloseTime}
            />
          </S.InputBox>
        </S.SectionBox>
        {/* </S.SectionTop> */}
        <S.SectionMiddle>
          <S.ImageSection>
            <S.Label>
              카페 내부 사진
              <S.LabelDetail>
                (메인으로 올라갈 사진 한 장을 체크해주세요!)
              </S.LabelDetail>
            </S.Label>

            <S.ImageListBox>
              {imageButtonArray.map((el, index) => {
                return (
                  <S.ImageBox key={el}>
                    {imageUrls[index] !== "" ||
                    props.data?.fetchOneStudyCafeForAdminister.images[index]
                      ?.image_url !== undefined ? (
                      <>
                        <S.CafeImg
                          src={
                            imageUrls[index] !== ""
                              ? imageUrls[index]
                              : props.data?.fetchOneStudyCafeForAdminister
                                  .images[index].image_url
                          }
                          onClick={onClickUpload}
                        />
                        <S.MainImgCheckBtn
                          type="radio"
                          onChange={onChangeCheckMain(index)}
                          name="check"
                        />
                      </>
                    ) : (
                      <S.PlusIcon type="button" onClick={onClickUpload}>
                        +
                      </S.PlusIcon>
                    )}
                    <S.ImageInput
                      type="file"
                      onChange={onChangeFile()}
                      ref={fileRef}
                    />
                  </S.ImageBox>
                );
              })}
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
                placeholder="ex) 3,000"
                {...register("timeFee")}
                defaultValue={
                  props.data?.fetchOneStudyCafeForAdminister.studyCafe_timeFee
                }
              />
              <S.Error>{formState.errors.timeFee?.message}</S.Error>
            </S.InputBox>
          </S.SectionBox>
          <S.SectionBox>
            <S.Label>이용안내 및 설명</S.Label>
            <S.Notice
              type="text"
              {...register("description")}
              defaultValue={
                props.data?.fetchOneStudyCafeForAdminister.studyCafe_description
              }
            />
          </S.SectionBox>
        </S.SectionBottom>
        <S.Footer>
          <S.Btn>{props.isEdit ? "수정" : "등록"}하기</S.Btn>
          {isSubmitModalOpen ? (
            <S.SubmitSuccessModal
              open={SubmitModal}
              onOk={SubmitModal}
              onCancel={SubmitModal}
              okButtonProps={{ style: { display: "none" } }}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <SubmitSuccessAlertModal />
            </S.SubmitSuccessModal>
          ) : (
            <></>
          )}
          <S.Btn type="button" onClick={onClickMoveCafeDetail}>
            취소하기
          </S.Btn>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}
