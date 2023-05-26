import * as S from "./adminMain.styles";

export default function AdminMain(): JSX.Element {
  return (
    <S.Wrapper>
      <S.SectionLeft>
        <S.AdminRegister>
          <S.Text1 style={{ marginLeft: "45px" }}>등록하기</S.Text1>
          <S.ImgBox1>
            <img src="/admin/main/arrowLeft.png" />
          </S.ImgBox1>
        </S.AdminRegister>
      </S.SectionLeft>
      <S.SectionRight>
        <S.AdminFetch>
          <S.Text2 style={{ marginLeft: "20px" }}>조회하기</S.Text2>
          <S.ImgBox2>
            <img src="/admin/main/arrowRight.png" />
          </S.ImgBox2>
        </S.AdminFetch>
      </S.SectionRight>
    </S.Wrapper>
  );
}
