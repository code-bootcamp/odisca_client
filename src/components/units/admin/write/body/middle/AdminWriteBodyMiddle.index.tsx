import * as S from "./AdminWriteBodyMiddle.styles";

export default function AdminWriteBodyMiddle(): JSX.Element {
  return (
    <S.SectionMiddle>
      <S.ImageSection>
        <S.Label>카페 내부 사진</S.Label>
        <S.ImageListBox>
          <S.ImageListOne>
            <S.ImageBox>
              <S.Icon />
            </S.ImageBox>
            <S.ImageBox>
              <S.Icon />
            </S.ImageBox>
          </S.ImageListOne>
          <S.ImageListTwo>
            <S.ImageBox>
              <S.Icon />
            </S.ImageBox>
            <S.ImageBox>
              <S.Icon />
            </S.ImageBox>
            <S.ImageBox>
              <S.Icon />
            </S.ImageBox>
          </S.ImageListTwo>
        </S.ImageListBox>
      </S.ImageSection>
    </S.SectionMiddle>
  );
}
