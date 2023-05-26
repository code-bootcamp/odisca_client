import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { ISeat, IStyle } from "./mapEditor.Type";
import * as S from "./mapEditor.Body.style";
import { useRouter } from "next/router";
import { useMutationCreateSeats } from "../../../../commons/hooks/mutations/useMutationCreateSeats";
import { useMutationCreateLoginCafeFloorPlanAndSeats } from "../../../../commons/hooks/mutations/useMutationCreateCafeFloorPlan";
import { wrapAsync } from "../../../../../commons/libraries/asyncFunc";
import { useQueryFetchOneStudyCafeForAdmin } from "../../../../commons/hooks/queries/useQueryFetchStudyCafeForAdmin";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../../commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { v4 as uuidv4 } from "uuid";

export default function MapEditor(): JSX.Element {
  const [inputX, setInputX] = useState(0); // x축 범위
  const [inputY, setInputY] = useState(0); // y축 범위
  const [stateX, setStateX] = useState(0); // x축 범위 저장용 없을 시 에러 확인
  const [stateY, setStateY] = useState(0); // y축 범위 저장용 없을 시 에러 확인
  const [isHover, setIsHover] = useState(false); // 위치 확인용 div 출력 유무
  const [hoverPosition, setHoverPosition] = useState([0, 0]);
  const [hoverSize, setHoverSize] = useState([0, 0]);
  const [mapArray, setMapArray] = useState<number[][]>([]); // 맵을 화면에 올리기 위한 2중 배열
  const [seatArray, setSeatArray] = useState<any[]>([]); // 나중에 백엔드로 보내줄 객체들 추가하는 배열, 객체 안 속성들의 타입 지정 필요
  const [size, setSize] = useState<number[][]>([]); // 좌석 사이즈를 나타내는 배열

  const [seatCount, setSeatCount] = useState(1);
  const [positionState, setPositionState] = useState(0); // 좌석 특성 저장하는 데이터
  const router = useRouter();
  const [createSeats] = useMutationCreateSeats();
  const [createFloor] = useMutationCreateLoginCafeFloorPlanAndSeats();
  const onChangeMapX = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputX(Number(event.target.value));
  };
  const onChangeMapY = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputY(Number(event.target.value));
  };

  const { refetch } = useQueryFetchOneStudyCafeForAdmin(
    String(router.query.Id)
  );

  const { refetch: refetchSeat } = useQueryFetchAllSeatsByStudyCafeId(
    String(router.query.Id)
  );

  const onClickMap = (): void => {
    if (isNaN(inputY) && isNaN(inputY)) {
      alert("숫자만 입력해주세요.");
      return;
    }
    if (inputY > 40 || inputX > 40) {
      alert("40이하의 숫자를 입력해주세요");
      return;
    }
    setSeatArray([]);
    setStateX(inputX);
    setStateY(inputY);
    setMapArray(Array.from(Array(inputY), () => Array(inputX).fill(0)));
  };

  const onClickDeleteMap = (): void => {
    setSeatArray([]);
    setStateX(0);
    setStateY(0);
    setMapArray([]);
    setIsHover(false);
  };
  const onClick2X2 = (): void => {
    setSize([
      [0, 1],
      [1, 1],
      [1, 0],
    ]);
    setPositionState(1);
    if (mapArray.length !== 0) {
      setIsHover(true);
      setHoverSize([2, 2]);
    }
  };
  const onClickCenter = (x: number, y: number) => () => {
    if (positionState === 0) {
      const arrSecond = [...seatArray];
      const newArray = [
        ...arrSecond.filter((el) => {
          let answer = true;
          el.seats.map((ele: number[]) => {
            if (ele[0] === x && ele[1] === y) {
              answer = false;
            }

            return 1;
          });
          if (!answer) {
            const newMap = [...mapArray];
            el.seats.map((el2: number[]) => {
              newMap[el2[1]][el2[0]] = 0;
              return 1;
            });
            setMapArray(newMap);
          }
          return answer;
        }),
      ];
      setSeatArray(newArray);
      return;
    }
    const maxSize = size.reduce(
      (acc, cur) => {
        let maxX = acc[0];
        let maxY = acc[1];
        if (cur[0] > acc[0]) {
          maxX = cur[0];
        }
        if (cur[1] > acc[1]) {
          maxY = cur[1];
        }
        return [maxX, maxY];
      },
      [0, 0]
    );

    if (x + maxSize[0] + 1 > stateX || y + maxSize[1] + 1 > stateY) {
      return;
    }
    const newMapArray = mapArray;
    if (newMapArray[y][x] !== 0) {
      return;
    }
    for (let i = 0; i < size.length; i++) {
      if (newMapArray[y + Number(size[i][1])][x + Number(size[i][0])] !== 0) {
        return;
      }
    }

    const seat: ISeat = {
      seats: null,
      status: 0,
      counts: 0,
    };
    const seatPixels = [];
    newMapArray[y][x] = seatCount;
    seatPixels.push([x, y]);
    size.map((el) => {
      newMapArray[y + el[1]][x + el[0]] = seatCount;
      seatPixels.push([x + Number(el[0]), y + Number(el[1])]);
      return 1;
    });
    seat.status = positionState;
    seat.counts = seatCount;
    seat.seats = seatPixels;
    setSeatCount((prev) => prev + 1);
    setSeatArray([...seatArray, seat]);
    setMapArray([...newMapArray]);
    setPositionState(0);
    setSize([]);
    setIsHover(false);
    setHoverSize([0, 0]);
    setHoverPosition([0, 0]);
  };

  const SizeChecker = styled.div`
    width: ${String(hoverSize[0] * 20) + "px"};
    height: ${String(hoverSize[1] * 20) + "px"};
    z-index: -1;
    position: absolute;

    ${stateY > hoverPosition[1] + hoverSize[1] - 1 ? "" : "display : none"};
    ${stateX > hoverPosition[0] + hoverSize[0] - 1 ? "" : "display : none"};

    top: ${String(450 + hoverPosition[1] * 20) + "px"};
    left: ${String(500 + hoverPosition[0] * 20) + "px"};
    background-color: gray;
  `;
  const onHoverTrue = (x: number, y: number) => () => {
    if (isHover) {
      setHoverPosition([x, y]);
    }
  };

  const image = (ele: number, x: number, y: number): IStyle => {
    const result = {
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
      backgroundColor: "none",
      cursor: "",
    };

    if (ele !== mapArray[y][x + 1]) {
      result.borderRight = "1px solid #fefefe";
    }
    if (y + 1 <= stateY - 1) {
      if (ele !== mapArray[y + 1][x]) {
        result.borderBottom = "1px solid #fefefe";
      }
    }
    if (ele >= 1) {
      result.backgroundColor = "#e4e4e4";
      result.cursor = "pointer";
    }
    return result;
  };

  const onClickSave = async (): Promise<void> => {
    try {
      await createFloor({
        variables: {
          createCafeFloorPlanInput: {
            studyCafe_id: String(router.query.Id),
            studyCafe_floorPlanX: stateX,
            studyCafe_floorPlanY: stateY,
            studyCafe_seatCount: seatArray.length,
          },
        },
      });
      if (refetch !== undefined) {
        await refetch();
      }
      const input = seatArray.map((el, index) => {
        const seat = {
          seat: el.seats,
          seat_number: String(index + 1),
        };
        return seat;
      });
      const seatsInput = {
        seatInformation: input,
        studyCafe_id: String(router.query.Id),
      };
      console.log(seatsInput);
      try {
        await createSeats({
          variables: {
            createSeatsInput: seatsInput,
          },
        });
        await refetchSeat();
        void router.push("/admin/adminPage");
      } catch (error) {
        if (error instanceof Error) {
          alert("등록실패");
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        alert("등록 실패했습니다.");
      }
    }
  };

  return (
    <>
      <S.HeightDiv>
        <S.MapEditorTitle>좌석 등록하기</S.MapEditorTitle>
        <div>
          <S.MapEditorInputContainer>
            <S.MapEditorInputWrapper>
              <S.MapEditorInputFont>가로</S.MapEditorInputFont>
              <S.MapEditorInput
                type="text"
                onChange={onChangeMapX}
                placeholder="40이하의 정수만 입력하세요."
              />
            </S.MapEditorInputWrapper>
            <S.MapEditorInputWrapper>
              <S.MapEditorInputFont>세로</S.MapEditorInputFont>
              <S.MapEditorInput
                type="text"
                onChange={onChangeMapY}
                placeholder="40이하의 정수만 입력하세요."
              />
            </S.MapEditorInputWrapper>
            <S.InputButton onClick={onClickMap}>입력</S.InputButton>
          </S.MapEditorInputContainer>

          <S.ButtonContainer>
            <S.FunctionBtn onClick={onClick2X2}>좌석 버튼</S.FunctionBtn>
            <S.FunctionBtn onClick={onClickDeleteMap}>초기화</S.FunctionBtn>
            <S.FunctionBtn onClick={wrapAsync(onClickSave)}>
              저장하기
            </S.FunctionBtn>
          </S.ButtonContainer>
        </div>
      </S.HeightDiv>
      <S.Container>
        <S.Box>
          {mapArray.map((el, indY) => {
            return (
              <S.Box2 key={uuidv4()}>
                {el.map((ele, indX) => {
                  return (
                    <S.Pixel
                      onClick={onClickCenter(indX, indY)}
                      style={image(ele, indX, indY)}
                      onMouseEnter={onHoverTrue(indX, indY)}
                      key={uuidv4()}
                    ></S.Pixel>
                  );
                })}
              </S.Box2>
            );
          })}
        </S.Box>
      </S.Container>
      {isHover ? <SizeChecker></SizeChecker> : <></>}
    </>
  );
}
