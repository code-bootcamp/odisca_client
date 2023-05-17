import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../../../commons/libraries/asyncFunc";
import { userEditSchema } from "../../../../../../commons/validations/validation";
import { useMutationUpdateLoginUser } from "../../../../../commons/hooks/mutations/useMutationUpdateLoginUser";
import * as S from "./UserEditFooter.styles";

interface IFormData {
  password: string;
  phoneNumber: string;
}

export default function UserEditFooter(): JSX.Element {
  const [updateLoginUser] = useMutationUpdateLoginUser();
  const { handleSubmit } = useForm({
    resolver: yupResolver(userEditSchema),
    mode: "onChange",
  });

  const onClickUserUpadte = async (data: IFormData) => {
    try {
      const result = await updateLoginUser({
        variables: {
          updateLoginUserInput: {
            password: data.password,
            phone: data.phoneNumber,
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
      return;
    }
  };

  return (
    <S.Wrapper>
      <form onSubmit={wrapFormAsync(handleSubmit(onClickUserUpadte))}>
        {/* 수정하기 버튼 */}
        <S.Btn>수정하기</S.Btn>

        {/* 회원 탈퇴하기 버튼 */}
        <S.Btn>탈퇴하기</S.Btn>
      </form>
    </S.Wrapper>
  );
}
