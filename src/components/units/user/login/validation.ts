import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,16}$/,
      "특수문자를 포함하여 8~16자리를 입력해주세요."
    ),
});
