import * as yup from "yup";

export const cafeEditSchema = yup.object({
  name: yup.string(),
  contact: yup.string(),
  timeFee: yup.number().min(100, "요금은 100원 이상이어야 합니다."),
  description: yup.string(),
  brn: yup.string(),
});
