import * as S from "./AdminWriteBodyTop.styles";

export default function AdminWriteBodyTop(): JSX.Element {
  return (
    <S.SectionTop>
      <S.SectionBox>
        <S.InputBox>
          <S.LabelBox>
            <S.Label>대표자 명</S.Label>
          </S.LabelBox>
          <S.Input type="text" placeholder="ex) 홍길동" />
        </S.InputBox>
        <S.InputBox>
          <S.LabelBox>
            <S.Label> 사업자번호</S.Label>
          </S.LabelBox>
          <S.Input type="text" placeholder="ex) 000-000-000" />
        </S.InputBox>
      </S.SectionBox>
      <S.SectionBox>
        <S.InputBox>
          <S.LabelBox>
            <S.Label>업체명</S.Label>
          </S.LabelBox>
          <S.Input type="text" />
        </S.InputBox>
      </S.SectionBox>
      <S.SectionBox>
        <S.InputBox>
          <S.LabelBox>
            <S.Label>연락처</S.Label>
          </S.LabelBox>
          <S.Input type="text" />
        </S.InputBox>
      </S.SectionBox>
      <S.AddressSectionBox>
        <S.AddressLabel>주소</S.AddressLabel>
        <S.AddressInputBox>
          <S.AddressZip>
            <S.Zipcode type="text" placeholder="07250"></S.Zipcode>
            <S.SearchBtn>검색</S.SearchBtn>
          </S.AddressZip>
          <S.AddressBox>
            <S.Address type="text" />
            <S.Address type="text" />
          </S.AddressBox>
        </S.AddressInputBox>
      </S.AddressSectionBox>
      <S.SectionBox>
        <S.InputBox>
          <S.LabelBox>
            <S.Label>영업시간</S.Label>
          </S.LabelBox>
          <S.Input type="text" placeholder="매일 07:00 - 24:00" />
        </S.InputBox>
      </S.SectionBox>
    </S.SectionTop>
  );
}
