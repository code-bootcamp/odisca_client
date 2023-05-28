import * as S from "../../units/admin/write/adminWrite.styles";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";

interface ITimeProps {
  onChangeSelectOpenTime: (time: string | undefined) => void;
  onChangeSelectCloseTime: (time: string | undefined) => void;
  data?: Pick<IQuery, "fetchOneStudyCafeForAdminister">;
  openTime: string;
  closeTime: string | undefined;
}

export default function OperatingTime(props: ITimeProps): JSX.Element {
  // const [currentValue, setCurrentValue] = useState("1시간");
  const [showOptions, setShowOptions] = useState(false);

  const onClickSetShowOption = (): void => {
    setShowOptions((prev) => !prev);
  };

  return (
    <S.SelectWrapper>
      <S.TimeSection onClick={onClickSetShowOption}>
        <S.TimeLabel>{props.openTime}</S.TimeLabel>
        <S.SelectOperatingTime show={showOptions}>
          <S.Option>시간을 선택해주세요.</S.Option>
          <S.Option
            value="00:00"
            onClick={() => {
              props.onChangeSelectOpenTime("00:00");
            }}
          >
            00:00
          </S.Option>
          <S.Option
            value="01:00"
            onClick={() => {
              props.onChangeSelectOpenTime("01:00");
            }}
          >
            01:00
          </S.Option>
          <S.Option
            value="02:00"
            onClick={() => {
              props.onChangeSelectOpenTime("02:00");
            }}
          >
            02:00
          </S.Option>
          <S.Option
            value="03:00"
            onClick={() => {
              props.onChangeSelectOpenTime("03:00");
            }}
          >
            03:00
          </S.Option>
          <S.Option
            value="04:00"
            onClick={() => {
              props.onChangeSelectOpenTime("04:00");
            }}
          >
            04:00
          </S.Option>
          <S.Option
            value="05:00"
            onClick={() => {
              props.onChangeSelectOpenTime("05:00");
            }}
          >
            05:00
          </S.Option>
          <S.Option
            value="06:00"
            onClick={() => {
              props.onChangeSelectOpenTime("06:00");
            }}
          >
            06:00
          </S.Option>
          <S.Option
            value="07:00"
            onClick={() => {
              props.onChangeSelectOpenTime("07:00");
            }}
          >
            07:00
          </S.Option>
          <S.Option
            value="08:00"
            onClick={() => {
              props.onChangeSelectOpenTime("08:00");
            }}
          >
            08:00
          </S.Option>
          <S.Option
            value="09:00"
            onClick={() => {
              props.onChangeSelectOpenTime("09:00");
            }}
          >
            09:00
          </S.Option>
          <S.Option
            value="10:00"
            onClick={() => {
              props.onChangeSelectOpenTime("10:00");
            }}
          >
            10:00
          </S.Option>
          <S.Option
            value="11:00"
            onClick={() => {
              props.onChangeSelectOpenTime("11:00");
            }}
          >
            11:00
          </S.Option>
        </S.SelectOperatingTime>
      </S.TimeSection>

      <S.OperatingTimeSpan>-</S.OperatingTimeSpan>

      <S.TimeSection onClick={onClickSetShowOption}>
        <S.TimeLabel>{props.closeTime}</S.TimeLabel>
        <S.SelectOperatingTime show={showOptions}>
          <S.Option>시간을 선택해주세요.</S.Option>
          <S.Option
            value="18:00"
            onClick={() => {
              props.onChangeSelectCloseTime("18:00");
            }}
          >
            18:00
          </S.Option>
          <S.Option
            value="19:00"
            onClick={() => {
              props.onChangeSelectCloseTime("19:00");
            }}
          >
            19:00
          </S.Option>
          <S.Option
            value="20:00"
            onClick={() => {
              props.onChangeSelectCloseTime("20:00");
            }}
          >
            20:00
          </S.Option>
          <S.Option
            value="21:00"
            onClick={() => {
              props.onChangeSelectCloseTime("21:00");
            }}
          >
            21:00
          </S.Option>
          <S.Option
            value="22:00"
            onClick={() => {
              props.onChangeSelectCloseTime("22:00");
            }}
          >
            22:00
          </S.Option>
          <S.Option
            value="23:00"
            onClick={() => {
              props.onChangeSelectCloseTime("23:00");
            }}
          >
            23:00
          </S.Option>
          <S.Option
            value="24:00"
            onClick={() => {
              props.onChangeSelectCloseTime("24:00");
            }}
          >
            24:00
          </S.Option>
          <S.Option
            value="01:00"
            onClick={() => {
              props.onChangeSelectCloseTime("01:00");
            }}
          >
            01:00
          </S.Option>
          <S.Option
            value="02:00"
            onClick={() => {
              props.onChangeSelectCloseTime("02:00");
            }}
          >
            02:00
          </S.Option>
        </S.SelectOperatingTime>
      </S.TimeSection>
    </S.SelectWrapper>
  );
}
