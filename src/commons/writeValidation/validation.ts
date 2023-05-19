import * as yup from "yup";

export const cafeWriteSchema = yup.object({
  name: yup.string().required("업체명을 입력해주세요."),
  contact: yup.string().required("연락처를 입력해주세요."),
  timeFee: yup
    .number()
    .required("요금을 입력해주세요.")
    .min(100, "요금은 100원 이상이어야 합니다.")
    .typeError("요금은 숫자로 입력해주세요."),
  description: yup.string(),

  brn: yup.string().required("사업자번호를 입력해주세요."),
});
