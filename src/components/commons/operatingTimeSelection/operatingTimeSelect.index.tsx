import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

interface ITimeProps {
  onChangeSelectOpenTime: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeSelectCloseTime: (event: ChangeEvent<HTMLSelectElement>) => void;
  data?: Pick<IQuery, "fetchOneStudyCafeForAdminister">;
}

const Wrapper = styled.section`
  width: calc(100% - 90px);
  margin-top: 12px;
  display: flex;
`;

const TimeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectOperatingTime = styled.select`
  width: 140px;
  height: 25px;
`;

const OperatingTimeSpan = styled.span`
  margin: 0px 20px;
`;

export default function OperatingTime(props: ITimeProps): JSX.Element {
  return (
    <Wrapper>
      <TimeSection>
        <SelectOperatingTime
          onChange={props.onChangeSelectOpenTime}
          defaultValue={
            props.data?.fetchOneStudyCafeForAdminister.studyCafe_openTime
          }
        >
          <option>시간을 선택해주세요.</option>
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
      </TimeSection>

      <OperatingTimeSpan>-</OperatingTimeSpan>

      <TimeSection>
        <SelectOperatingTime
          onChange={props.onChangeSelectCloseTime}
          defaultValue={
            props.data?.fetchOneStudyCafeForAdminister.studyCafe_closeTime
          }
        >
          <option>시간을 선택해주세요.</option>
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
      </TimeSection>
    </Wrapper>
  );
}
