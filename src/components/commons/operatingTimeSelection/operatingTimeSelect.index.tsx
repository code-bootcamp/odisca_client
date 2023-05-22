import styled from "@emotion/styled";

const SelectOperatingTime = styled.select`
  width: 100px;
  height: 25px;
`;

const OperatingTimeSpan = styled.span`
  margin: 0px 8px;
`;

export default function OperatingTime(props): JSX.Element {
  return (
    <>
      <SelectOperatingTime
        onChange={props.onChangeSelectOpenTime}
        defaultValue={props.data?.fetchStudyCafe.openTime}
      >
        <option>영업시작시간</option>
        <option value={"00:00"} label={"00:00"}>
          00:00
        </option>
        <option value={"01:00"} label={"01:00"}>
          01:00
        </option>
        <option value={"02:00"} label={"02:00"}>
          02:00
        </option>
        <option value={"03:00"} label={"03:00"}>
          03:00
        </option>
        <option value={"04:00"} label={"04:00"}>
          04:00
        </option>
        <option value={"05:00"} label={"05:00"}>
          05:00
        </option>
        <option value={"06:00"} label={"06:00"}>
          06:00
        </option>
        <option value={"07:00"} label={"07:00"}>
          07:00
        </option>
        <option value={"08:00"} label={"08:00"}>
          08:00
        </option>
        <option value={"09:00"} label={"09:00"}>
          09:00
        </option>
        <option value={"10:00"} label={"10:00"}>
          10:00
        </option>
        <option value={"11:00"} label={"11:00"}>
          11:00
        </option>
      </SelectOperatingTime>
      <OperatingTimeSpan>-</OperatingTimeSpan>
      <SelectOperatingTime
        onChange={props.onChangeSelectCloseTime}
        defaultValue={props.data?.fetchStudyCafe.closeTime}
      >
        <option>영업종료시간</option>
        <option value={"18:00"} label={"18:00"}>
          18:00
        </option>
        <option value={"19:00"} label={"19:00"}>
          19:00
        </option>
        <option value={"20:00"} label={"20:00"}>
          20:00
        </option>
        <option value={"21:00"} label={"21:00"}>
          21:00
        </option>
        <option value={"22:00"} label={"22:00"}>
          22:00
        </option>
        <option value={"23:00"} label={"23:00"}>
          23:00
        </option>
        <option value={"24:00"} label={"24:00"}>
          24:00
        </option>
        <option value={"01:00"} label={"01:00"}>
          01:00
        </option>
        <option value={"02:00"} label={"02:00"}>
          02:00
        </option>
      </SelectOperatingTime>
    </>
  );
}
