import * as yup from "yup";

export const cafeEditSchema = yup.object({
  name: yup.string(),
  contact: yup.string(),
  timeFee: yup
    .number()
    .min(100, "요금은 100원 이상이어야 합니다.")
    .typeError("요금은 숫자로 입력해주세요."),
  description: yup.string(),
  brn: yup.string(),
});
