import styled from "@emotion/styled";
import UserEditBody from "./body/UserEditBody.index";
import UserEditFooter from "./footer/UserEditFooter.index";
import UserEditHeader from "./header/UserEditHeader.index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { wrapFormAsync } from "../../../../../commons/libraries/asyncFunc";

interface IFormData {
  password: string;
  phoneNumber: string;
}

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 823px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function UserEdit(): JSX.Element {
  // 회원정보 입력란 react-hook-form 설정
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 회원정보 수정하기 클릭 시
  const onClickSubmit = async (data: IFormData) => {};

  return (
    <Body>
      <Wrapper>
        <UserEditHeader />
        <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
          <UserEditBody register={register} formState={formState} />
          <UserEditFooter onClickSubmit={onClickSubmit} />
        </form>
      </Wrapper>
    </Body>
  );
}
