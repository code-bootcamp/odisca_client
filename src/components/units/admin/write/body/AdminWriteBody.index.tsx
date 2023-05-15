import styled from "@emotion/styled";
import AdminWriteBodyBottom from "./bottom/AdminWriteBodyBottom.index";
import AdminWriteBodyMiddle from "./middle/AdminWriteBodyMiddle.index";
import AdminWriteBodyTop from "./top/AdminWriteBodyTop.index";

const Body = styled.main`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function AdminWriteBody(): JSX.Element {
  return (
    <Body>
      {/* data={data} */}
      <AdminWriteBodyTop />
      <AdminWriteBodyMiddle />
      <AdminWriteBodyBottom />
    </Body>
  );
}
