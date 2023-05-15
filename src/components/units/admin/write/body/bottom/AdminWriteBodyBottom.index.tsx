import * as S from "./AdminWriteBodyBottom.styles";

export default function AdminWriteBodyBottom(): JSX.Element {
  return (
    <S.SectionBottom>
      <S.SectionBox>
        <S.Label>이용 요금표</S.Label>
        <S.InputBox>
          <S.Input type="text" placeholder="시간 당" />

          <S.Input type="text" placeholder="원" />
        </S.InputBox>
      </S.SectionBox>
      <S.SectionBox>
        <S.Label>이용안내 및 설명</S.Label>
        <S.Notice type="text" />
      </S.SectionBox>
    </S.SectionBottom>
  );
}
