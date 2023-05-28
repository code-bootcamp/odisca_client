import * as yup from "yup";

export const signUpSchema = yup.object({
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요.")
    .matches(
      /(?=.*\d)(?=.*[~`!@#$%\\^&*()-+=])(?=.*[a-zA-Z]).{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 입력해주세요"
    ),
  confirmPw: yup
    .string()
    .oneOf([yup.ref("password"), ""], "비밀번호와 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요"),

  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  phone: yup
    .string()
    .matches(/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/, "전화번호가 형식에 맞지 않습니다.")
    .required("전화번호를 입력해주세요."),
});

export const schema = yup.object({
  user_email: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.")
    .required("이메일을 입력해주세요."),
  user_password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /(?=.*\d)(?=.*[~`!@#$%\\^&*()-+=])(?=.*[a-zA-Z]).{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 입력해주세요"
    ),
});

export const schemaAdmin = yup.object({
  email: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /(?=.*\d)(?=.*[~`!@#$%\\^&*()-+=])(?=.*[a-zA-Z]).{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 입력해주세요"
    ),
});

export const userEditSchema = yup.object({
  user_phone: yup
    .string()
    .nullable()
    .matches(/^(010)-\d{4}-\d{4}$/, "올바른 전화번호 형식이 아닙니다."),
});
