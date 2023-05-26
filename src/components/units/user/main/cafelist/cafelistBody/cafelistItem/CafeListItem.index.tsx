import { useRouter } from "next/router";
import { IStudyCafe } from "../../../../../../../commons/types/generated/types";
import * as S from "./CafeListItem.styles";

interface CafeListItemProps {
  el: IStudyCafe;
}

export default function CafeListItem(props: CafeListItemProps): JSX.Element {
  const cafeId = props.el.studyCafe_id;
  const router = useRouter();

  const handleClick = (cafeId: string) => (): void => {
    void router.push(`/user/${cafeId}`);
  };

  const imageUrl = props.el.images?.[0]?.image_url ?? "/ready.png";

  return (
    <S.Wrapper>
      <S.ListBox key={cafeId}>
        <S.CafeBox onClick={handleClick(cafeId)} id={cafeId}>
          <S.CafeList>
            <S.CafeImg src={imageUrl} />
            <S.CafeName>{props.el.studyCafe_name}</S.CafeName>
            <S.CafeInfo>
              <S.PriceImg src="/user/main/price.png" />
              <S.Price>1시간</S.Price>
              <S.Price>{props.el.studyCafe_timeFee}원</S.Price>
            </S.CafeInfo>
            <S.CafeDetail>{props.el.studyCafe_description}</S.CafeDetail>
            {props.el.review?.[0]?.review_content !== undefined ? (
              <S.CafeReview>
                {props.el.review?.[0]?.review_content ?? ""}
              </S.CafeReview>
            ) : (
              <></>
            )}
          </S.CafeList>
        </S.CafeBox>
        <S.DevidedLine></S.DevidedLine>
      </S.ListBox>
    </S.Wrapper>
  );
}
