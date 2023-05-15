// 댓글페이지
import * as S from "./UserDetailFooter.styles";

export default function UserDetailFooter(): JSX.Element {
  return (
    <S.Footer>
      <S.Icon src="/review.png" />
      <S.Label>이용후기</S.Label>
    </S.Footer>
  );
}
