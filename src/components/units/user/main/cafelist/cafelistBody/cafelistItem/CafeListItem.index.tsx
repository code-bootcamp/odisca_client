import { useRouter } from "next/router";
import * as S from "./CafeListItem.styles";

interface CafeListItemProps {
  el: {
    studyCafe_id: string;
    studyCafe_name: string;
    studyCafe_timeFee: number;
    studyCafe_description: string;
    studyCafe_lat: GLfloat;
    studyCafe_lon: GLfloat;
    image?: {
      image_url: string;
    };
  };
}

export default function CafeListItem(props: CafeListItemProps): JSX.Element {
  const cafeId = props.el.studyCafe_id;
  const router = useRouter();

  const handleClick = (cafeId: string): void => {
    void router.push(`/user/${cafeId}`);
  };

  return (
    <S.Wrapper>
      <S.ListBox key={cafeId}>
        <S.CafeBox onClick={handleClick} id={cafeId}>
          <S.CafeName>{props.el.studyCafe_name}</S.CafeName>
          <S.CafeList>
            <S.CafeImg
              src={
                props.el.image?.image_url !== undefined
                  ? `https://storage.googleapis.com/${props.el.image.image_url}`
                  : "/ready.png"
              }
            />
            <S.CafeInfo>
              <S.PriceImg src="/user/main/price.png" />
              <S.Price>1시간</S.Price>
              <S.Price>{props.el.studyCafe_timeFee}원</S.Price>
            </S.CafeInfo>
            <S.CafeDetail>{props.el.studyCafe_description}</S.CafeDetail>
            <S.CafeReview>
              여기 깔끔하고 집중 잘돼요. 백색소음 때문인가ㅎ
            </S.CafeReview>
          </S.CafeList>
        </S.CafeBox>
        <S.DevidedLine></S.DevidedLine>
      </S.ListBox>
    </S.Wrapper>
  );
}
