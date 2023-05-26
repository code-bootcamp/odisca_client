import { useRouter } from "next/router";
import * as S from "./adminPagebody.styles";
import { wrapAsync } from "../../../../../commons/libraries/asyncFunc";
import { IQuery } from "../../../../../commons/types/generated/types";

interface IAdminBodyProps {
  data?: Pick<IQuery, "fetchLoginAdminister">;
}

export default function AdminPageBody(props: IAdminBodyProps): JSX.Element {
  const router = useRouter();

  const onClickDetail = (id: string) => async (): Promise<void> => {
    await router.push(`/admin/${id}`);
  };

  const onClickNew = (): void => {
    void router.push("/admin/new");
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>My Cafes</S.Title>
        {props.data?.fetchLoginAdminister.studyCafes?.map((el) => {
          return (
            <div key={el.studyCafe_id}>
              <S.MyCafeWrapper>
                <S.LeftWrapper>
                  {el.images.map((el2) => {
                    return el2.image_isMain ? (
                      <S.CafeImg
                        src={el2?.image_url ?? ""}
                        onClick={wrapAsync(onClickDetail(el.studyCafe_id))}
                      ></S.CafeImg>
                    ) : (
                      <></>
                    );
                  })}
                </S.LeftWrapper>
                <S.RightWrapper>
                  <S.Top>
                    <S.CafeName
                      onClick={wrapAsync(onClickDetail(el.studyCafe_id))}
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
        <S.CreateSeatingChart onClick={onClickNew}>
          카페 등록하기
        </S.CreateSeatingChart>
      </S.Wrapper>
    </>
  );
}
