import * as yup from "yup";

export const schema = yup.object({
  password: yup.string().required("비밀번호를 입력해주세요."),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/, "전화번호가 형식에 맞지 않습니다.")
    .required("전화번호를 입력해주세요."),
});
