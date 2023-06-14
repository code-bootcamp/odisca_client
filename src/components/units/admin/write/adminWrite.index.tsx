// 라이브러리
import DaumPostcodeEmbed from "react-daum-postcode";

// hooks
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutationCreateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationCreateLoginStudyCafe";
import { useMutationUpdateLoginStudyCafe } from "../../../commons/hooks/mutations/useMutationUpdateLoginStudyCafe";
import { useQueryFetchLoginAdminister } from "../../../commons/hooks/queries/useQueryFetchLoginAdminister";
import { useMutationUploadImageFile } from "../../../commons/hooks/mutations/useMutationUploadImageFile";
import { useQueryFetchOneStudyCafeForAdmin } from "../../../commons/hooks/queries/useQueryFetchStudyCafeForAdmin";

// 검증 및 설정
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { cafeWriteSchema } from "../../../../commons/writeValidation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { cafeEditSchema } from "../../../../commons/adminEditValidation/validation";

// components
import * as S from "./adminWrite.styles";
import OperatingTime from "../../../commons/operatingTimeSelection/operatingTimeSelect.index";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import { IQuery } from "../../../../commons/types/generated/types";
import SubmitSuccessAlertModal from "../../../commons/submitSuccessModal/submitSuccessModal.index";
import DeleteModal from "../../../commons/deleteModal/deleteModal.index";

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

interface IResult {
  x: number;
  y: number;
}

declare const window: typeof globalThis & {
  kakao: any;
};

interface IWriteProps {
  data?: Pick<IQuery, "fetchOneStudyCafeForAdminister"> | null;
  isEdit: boolean;
}

interface AddressData {
  address: string;
  sido: string;
  sigungu: string;
}

export default function AdminWrite(props: IWriteProps): JSX.Element {
  // router
  const router = useRouter();

  // useState
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", "", ""]);
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [imageButtonArray] = useState(["", "", "", "", ""]);
  const [isMain, setIsMain] = useState([true, false, false, false, false]);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  // useRef
  const fileRef = useRef<HTMLInputElement>(null);

  // useMutation(admin 등록)
  const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();
  const [updateLoginStudyCafe] = useMutationUpdateLoginStudyCafe();
  const [uploadImageFile] = useMutationUploadImageFile();
  const [routerURL, setRouterURL] = useState("");

  // useQuery
  const { data: fetchAdministerData } = useQueryFetchLoginAdminister();
  const { data, refetch } = useQueryFetchOneStudyCafeForAdmin(
    String(router.query.Id)
  );

  // kakao map 사용해서 daumpostcode에서 선택한 주소의 위도와 경도 데이터 추출
  useEffect(() => {
    const script = document.createElement("script"); // script tag 만들기
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6583c79fd8fd9f0d519f6b325b841c09&libraries=services";
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
        console.log(map);
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소-좌표 변환 객체 생성
        geocoder.addressSearch(
          `${address}`,
          function (result: IResult[], status: boolean) {
            // 주소로 좌표 검색
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              console.log(coords);
              setLat(result[0].y.toString());
              setLon(result[0].x.toString());
            }
          }
        );
      });
    };
  }, [address, lon, lat]);

  useEffect(() => {
    if (data?.fetchOneStudyCafeForAdminister !== undefined) {
      setAddress(data?.fetchOneStudyCafeForAdminister.studyCafe_address ?? "");
      setAddressDetail(
        data?.fetchOneStudyCafeForAdminister.studyCafe_addressDetail ?? ""
      );
      setCity(data?.fetchOneStudyCafeForAdminister.studyCafe_city ?? "");
      setDistrict(
        data?.fetchOneStudyCafeForAdminister.studyCafe_district ?? ""
      );
      setLat(
        data?.fetchOneStudyCafeForAdminister.studyCafe_lat?.toString() ?? ""
      );
      setLon(
        data?.fetchOneStudyCafeForAdminister.studyCafe_lon?.toString() ?? ""
      );
      setOpenTime(
        data?.fetchOneStudyCafeForAdminister.studyCafe_openTime ?? ""
      );
      setCloseTime(
        data?.fetchOneStudyCafeForAdminister.studyCafe_closeTime ?? ""
      );
    }
  }, [data]);

  // useForm 사용
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(props.isEdit ? cafeEditSchema : cafeWriteSchema),
  });

  // AddressDetail 입력값
  const AddressDetailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(event.target.value);
  };

  // openTime Select
  const onChangeSelectOpenTime = (time: string) => (): void => {
    setOpenTime(String(time));
  };

  // CloseTime Select
  const onChangeSelectCloseTime = (time: string) => (): void => {
    setCloseTime(String(time));
  };

  const AddressModal = (): boolean => {
    setIsAddressModalOpen((prev) => !prev);
    return !isAddressModalOpen;
  };
  // daumpostcode에서 주소 검색 완료 시 로직
  const onCompleteAddressSearch = (AddressData: AddressData): void => {
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

  const onChangeFile =
    () =>
    (event: ChangeEvent<HTMLInputElement>): void => {
      const file = event.target.files?.[0];

      if (file === undefined) return;

      const isValid = checkValidationFile(file);
      if (!isValid) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const newTemp = [...imageUrls.filter((el) => el !== "")];
          newTemp.push(event.target?.result);
          while (newTemp.length < 5) {
            newTemp.push("");
          }
          setImageUrls(newTemp);
          const tempFiles = [...files.filter((el) => el !== "")];
          tempFiles.push(file);
          while (tempFiles.length < 5) {
            tempFiles.push("");
          }
          setFiles(tempFiles);
        }
      };
    };

  // 등록하기 버튼 눌렀을 때(admin 등록)
  const onClickCafeSubmit = async (data: FieldValues): Promise<void> => {
    const results = await uploadImageFile({
      variables: { images: files.filter((el) => el instanceof File) },
    });

    const resultUrls = [];

    if (results.data?.uploadImageFile != null) {
      const uploadImageFile = results.data.uploadImageFile;
      for (let i = 0; i < uploadImageFile.length; i++) {
        if (uploadImageFile !== undefined) {
          resultUrls.push(uploadImageFile[i]);
        }
      }
    }

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
      setRouterURL(result.data?.createLoginStudyCafe.studyCafe_id ?? "");
    } catch (error) {
      if (error instanceof Error) alert("업체 등록에 실패했습니다!");
    }
  };

  // 수정하기 버튼 눌렀을 때(admin 수정)
  const onClickUpdateCafe = async (data: FieldValues): Promise<void> => {
    const formData: IFormValues = {
      name: data.name as string,
      contact: data.contact as string,
      timeFee: data.timeFee as number,
      description: data.description as string,
      brn: data.brn as string,
      image: {
        url: data.image?.url as string,
        isMain: data.image?.isMain as boolean,
      },
    };

    const results = await uploadImageFile({
      variables: { images: files.filter((el) => el instanceof File) },
    });
    const resultUrls = [];
    if (results.data?.uploadImageFile != null) {
      const uploadImageFile = results.data.uploadImageFile;
      for (let i = 0; i < uploadImageFile.length; i++) {
        if (uploadImageFile !== undefined) {
          resultUrls.push(uploadImageFile[i]);
        }
      }
    }
    const images = resultUrls.map((el, index) => {
      return {
        image_url: el,
        image_isMain: isMain[index],
      };
    });

    try {
      await updateLoginStudyCafe({
        variables: {
          updateStudyCafeInput: {
            studyCafe_id: String(router.query.Id),
            studyCafe_name: formData.name,
            studyCafe_address: address,
            studyCafe_addressDetail: addressDetail,
            studyCafe_city: city,
            studyCafe_district: district,
            studyCafe_contact: formData.contact,
            studyCafe_timeFee: formData.timeFee,
            studyCafe_description: formData.description,
            studyCafe_openTime: openTime,
            studyCafe_closeTime: closeTime,
            studyCafe_lat: Number(lat),
            studyCafe_lon: Number(lon),
            image: images,
          },
        },
      });
      if (refetch !== undefined) {
        await refetch();
      }
      void router.push(`/admin/${String(router.query.Id)}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 이미지 등록 시 메인 이미지 설정
  const onChangeCheckMain = (index: number) => (): void => {
    const newMain = new Array(5).fill(false);
    newMain[index] = true;
    setIsMain(newMain);
  };

  const onClickGoBack = (): void => {
    history.back();
  };

  const onClickOpenDeleteModal = (): void => {
    setIsDeleteModalOpen(true);
  };

  // return 값
  return (
    <S.Body>
      <S.Wrapper>
        <S.WrapperTop
          onSubmit={
            props.isEdit
              ? wrapFormAsync(handleSubmit(onClickUpdateCafe))
              : wrapFormAsync(handleSubmit(onClickCafeSubmit))
          }
        >
          <S.Header>
            <S.Title>업체 {props.isEdit ? "수정" : "등록"}</S.Title>
          </S.Header>
          {/* <S.SectionTop> */}
          <S.SectionBox>
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
              <div>
                <S.LabelBox>
                  <S.Label> 사업자번호</S.Label>
                </S.LabelBox>
                <S.Input
                  type="text"
                  placeholder="ex) 000-000-000"
                  {...register("brn")}
                  value={data?.fetchOneStudyCafeForAdminister.studyCafe_brn}
                />
              </div>

              <S.Error>{formState.errors.brn?.message}</S.Error>
            </S.InputBox>
          </S.SectionBox>

          <S.SectionBox>
            <S.InputBox>
              <S.LabelBox>
                <S.Label>업체명</S.Label>
              </S.LabelBox>
              <S.Input
                type="text"
                {...register("name")}
                defaultValue={
                  data?.fetchOneStudyCafeForAdminister.studyCafe_name
                }
              />
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.InputBox>
            <S.InputBox>
              <S.LabelBox>
                <S.Label>연락처</S.Label>
              </S.LabelBox>
              <S.Input
                type="text"
                {...register("contact")}
                defaultValue={
                  data?.fetchOneStudyCafeForAdminister.studyCafe_contact
                }
              />
              <S.Error>{formState.errors.contact?.message}</S.Error>
            </S.InputBox>
          </S.SectionBox>
        </S.WrapperTop>

        <S.WrapperMiddle>
          <S.MiddleTopSectionBox>
            <S.AddressBox>
              <div>
                <S.AddressLabel>주소</S.AddressLabel>
                <div id="map" style={{ display: "none" }}></div>
                <S.SearchBtn type="button" onClick={AddressModal}>
                  검색
                </S.SearchBtn>
              </div>

              <S.AddressInputBox>
                {isAddressModalOpen ? (
                  <S.AddressSearchModal
                    open={isAddressModalOpen}
                    onOk={() => AddressModal()}
                    onCancel={() => AddressModal()}
                  >
                    <DaumPostcodeEmbed onComplete={onCompleteAddressSearch} />
                  </S.AddressSearchModal>
                ) : (
                  <></>
                )}

                <S.Address
                  type="text"
                  readOnly
                  value={
                    address !== ""
                      ? address
                      : data?.fetchOneStudyCafeForAdminister
                          .studyCafe_address ?? ""
                  }
                />
                <S.Address
                  placeholder="상세주소를 입력해주세요."
                  type="text"
                  defaultValue={
                    data?.fetchOneStudyCafeForAdminister.studyCafe_addressDetail
                  }
                  onChange={AddressDetailInput}
                />
              </S.AddressInputBox>
            </S.AddressBox>
            <S.TimeSectionBox>
              <S.InputBox>
                <S.LabelBox>
                  <S.Label>영업시간</S.Label>
                </S.LabelBox>
                <OperatingTime
                  data={data}
                  openTime={openTime}
                  closeTime={closeTime}
                  onChangeSelectOpenTime={onChangeSelectOpenTime}
                  onChangeSelectCloseTime={onChangeSelectCloseTime}
                />
              </S.InputBox>
            </S.TimeSectionBox>
          </S.MiddleTopSectionBox>

          <S.SectionMiddle>
            <S.ImageSection>
              <S.Label style={{ marginBottom: "20px" }}>
                카페 내부 사진
                <S.LabelDetail>
                  (사진을 선택한 후 메인 사진 한 장을 체크해주세요!)
                </S.LabelDetail>
              </S.Label>

              <S.ImageListBox>
                {imageButtonArray.map((el, index) => {
                  return (
                    <S.ImageBox key={el}>
                      {imageUrls[index] !== "" ||
                      data?.fetchOneStudyCafeForAdminister.images[index]
                        ?.image_url !== undefined ? (
                        <>
                          <S.CafeImg
                            src={
                              imageUrls[index] !== ""
                                ? imageUrls[index]
                                : data?.fetchOneStudyCafeForAdminister.images[
                                    index
                                  ].image_url ?? ""
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
        </S.WrapperMiddle>

        <S.WrapperBtm
          onSubmit={
            props.isEdit
              ? wrapFormAsync(handleSubmit(onClickUpdateCafe))
              : wrapFormAsync(handleSubmit(onClickCafeSubmit))
          }
        >
          <S.SectionBottom>
            <S.BtmSectionBox>
              <S.TimeFeeBoxLeft>
                <S.Label>이용 요금</S.Label>
                <S.Hour>(시간 당)</S.Hour>
              </S.TimeFeeBoxLeft>

              <S.InputBox>
                <S.Input
                  type="text"
                  placeholder="ex) 3,000"
                  {...register("timeFee")}
                  defaultValue={
                    data?.fetchOneStudyCafeForAdminister.studyCafe_timeFee
                  }
                />
                <S.Error>{formState.errors.timeFee?.message}</S.Error>
              </S.InputBox>
            </S.BtmSectionBox>
            <S.BtmSectionBox
              style={{ flexDirection: "column", marginTop: "15px" }}
            >
              <S.Label>이용안내 및 설명</S.Label>
              <S.Notice
                {...register("description")}
                defaultValue={
                  data?.fetchOneStudyCafeForAdminister.studyCafe_description
                }
              />
            </S.BtmSectionBox>
          </S.SectionBottom>

          <S.Footer>
            <S.Btn style={{ marginRight: "20px" }}>
              {props.isEdit ? "수정" : "등록"}하기
            </S.Btn>
            <S.SubmitSuccessModal
              open={isSubmitModalOpen}
              onOk={() => {
                setIsSubmitModalOpen((prev) => !prev);
              }}
              onCancel={() => {
                setIsSubmitModalOpen((prev) => !prev);
              }}
              okButtonProps={{ style: { display: "none" } }}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <SubmitSuccessAlertModal url={routerURL} />
            </S.SubmitSuccessModal>
            <S.Btn type="button" onClick={onClickGoBack}>
              취소하기
            </S.Btn>
          </S.Footer>
          {props.isEdit ? (
            <S.DeleteBtnBox>
              <S.DeleteBtn onClick={onClickOpenDeleteModal}>
                업체를 삭제하시겠습니까?
              </S.DeleteBtn>
            </S.DeleteBtnBox>
          ) : (
            <></>
          )}
          <S.DeleteCafeModal
            open={isDeleteModalOpen}
            onOk={() => {
              setIsDeleteModalOpen((prev) => !prev);
            }}
            onCancel={() => {
              setIsDeleteModalOpen((prev) => !prev);
            }}
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
          >
            <DeleteModal />
          </S.DeleteCafeModal>
        </S.WrapperBtm>
      </S.Wrapper>
    </S.Body>
  );
}
