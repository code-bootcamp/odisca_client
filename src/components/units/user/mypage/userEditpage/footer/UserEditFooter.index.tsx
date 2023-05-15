import styled from "@emotion/styled";

const Wrapper = styled.section`
  margin-bottom: 97px;
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 26px;
`;

export default function UserEditFooter(props): JSX.Element {
  return (
    <Wrapper>
      {/* 수정하기 버튼 */}
      <Btn
        style={{
          border: "none",
          marginRight: "37px",
          color: "#ffffff",
          backgroundColor: "#40E0D0;",
        }}
        onClick={props.onClickSubmit}
      >
        수정하기
      </Btn>

      {/* 회원 탈퇴하기 버튼 */}
      <Btn
        style={{
          border: "1px solid #40E0D0",
          color: "#40E0D0",
          backgroundColor: "#ffffff",
        }}
      >
        탈퇴하기
      </Btn>
    </Wrapper>
  );
}
