import { useRouter } from "next/router";
import * as S from "./adminPagebody.styles";
import { wrapFormAsync } from "../../../../../commons/libraries/asyncFunc";

export default function AdminPageBody(props): JSX.Element {
  const router = useRouter();
  const onClickDetail = (id: string) => async (): Promise<void> => {
    await router.push("/admin/" + id);
  };
  return (
    <>
      <S.Wrapper>
        <S.Title>My Cafes</S.Title>
        {props.data?.fetchAllStudyCafesByAdminId?.map((el) => {
          return (
            <div key={el.id}>
              <S.MyCafeWrapper>
                <S.LeftWrapper>
                  <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
                </S.LeftWrapper>
                <S.RightWrapper>
                  <S.Top>
                    <S.CafeName
                      onClick={wrapFormAsync(onClickDetail(el.studyCafe_id))}
                    >
                      {el.studyCafe_name}
                    </S.CafeName>
                    <S.Remark>{el.studyCafe_description}</S.Remark>
                  </S.Top>
                  <S.Bottom>
                    <S.OccupiedSeat>이용중인 좌석 30석</S.OccupiedSeat>
                    <S.MoveToSeatBtn>확인하기</S.MoveToSeatBtn>
                  </S.Bottom>
                </S.RightWrapper>
              </S.MyCafeWrapper>
            </div>
          );
        })}
        <S.CreateSeatingChart>좌석배치도 등록하기</S.CreateSeatingChart>
      </S.Wrapper>
    </>
  );
}
