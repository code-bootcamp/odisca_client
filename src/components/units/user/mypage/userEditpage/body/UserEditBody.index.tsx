import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userEditSchema } from "../../../../../../commons/validations/validation";
import { useQueryFetchLoginUser } from "../../../../../commons/hooks/queries/useQueryFetchLoginUser";
import * as S from "./UserEditBody.styles";
// import { v4 as uuidv4 } from "uuid";
// import Uploads01 from "../../../../../commons/uploads/01/Uploads01.container";

export default function UserEditBody(): JSX.Element {
  const { data } = useQueryFetchLoginUser();
  // const [fileUrls, setFileUrls] = useState([""]);

  // const onChangeFileUrls = (fileUrl: string, index: number): void => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

  const { register, formState } = useForm({
    resolver: yupResolver(userEditSchema),
    mode: "onChange",
  });

  console.log(formState);

  return (
    <S.Wrapper>
      <S.ProfileImgBox>
        {/* <Uploads01
          key={uuidv4()}
          fileUrl={fileUrls}
          onChangeFileUrls={onChangeFileUrls}
        /> */}
        <S.ProfileImg src="" />
        <S.ProfileImgEdit src="/user/mypage/edit/camera.png" />
      </S.ProfileImgBox>
      <S.InputForm>
        <S.NonEditList>
          <S.ListDetail>이름</S.ListDetail>
          <S.DetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.name}
            readOnly
          />
        </S.NonEditList>
        <S.NonEditList>
          <S.ListDetail>이메일</S.ListDetail>
          <S.DetailInput
            type="text"
            defaultValue={data?.fetchLoginUser.email}
            readOnly
          />
        </S.NonEditList>
        <S.EditListBox>
          <S.EditList>
            <S.ListDetail>비밀번호</S.ListDetail>
            <S.DetailInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password")}
            />
          </S.EditList>
          <S.AlertMessage>{formState.errors.password?.message}</S.AlertMessage>
        </S.EditListBox>
        <S.EditListBox>
          <S.EditList>
            <S.ListDetail>전화번호</S.ListDetail>
            <S.DetailInput
              style={{ color: "#4f4f4f" }}
              type="text"
              defaultValue={data?.fetchLoginUser.phone}
              {...register("phoneNumber")}
            />
          </S.EditList>
          <S.AlertMessage>
            {formState.errors.phoneNumber?.message}
          </S.AlertMessage>
        </S.EditListBox>
      </S.InputForm>
    </S.Wrapper>
  );
}
