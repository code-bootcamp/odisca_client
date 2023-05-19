import styled from "@emotion/styled";

const SelectOperatingTime = styled.select`
  width: 100px;
  height: 25px;
`;

const OperatingTimeSpan = styled.span`
  margin: 0px 8px;
`;

export default function OperatingTime(): JSX.Element {
  return (
    <>
      <SelectOperatingTime>
        <option>영업시작시간</option>
        <option>00:00</option>
        <option>01:00</option>
        <option>02:00</option>
        <option>03:00</option>
        <option>04:00</option>
        <option>05:00</option>
        <option>06:00</option>
        <option>07:00</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
      </SelectOperatingTime>
      <OperatingTimeSpan>-</OperatingTimeSpan>
      <SelectOperatingTime>
        <option>영업종료시간</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
        <option>23:00</option>
        <option>00:00</option>
        <option>01:00</option>
        <option>02:00</option>
      </SelectOperatingTime>
    </>
  );
}
