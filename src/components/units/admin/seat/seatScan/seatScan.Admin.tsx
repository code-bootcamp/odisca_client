import { useRouter } from "next/router";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../../../components/commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { useEffect, useState } from "react";
import * as S from "./seatScan.Style";
import { useQueryFetchOneStudyCafeForAdmin } from "../../../../../components/commons/hooks/queries/useQueryFetchStudyCafeForAdmin";

interface SeatData {
  status: string;
  seatId: string;
  number: string;
}

export default function SeatScanPage(): JSX.Element {
  const router = useRouter();
  const { data: dataCafe } = useQueryFetchOneStudyCafeForAdmin(
    String(router.query.Id)
  );
  const { data } = useQueryFetchAllSeatsByStudyCafeId(String(router.query.Id));
  const [stateX, setStateX] = useState(
    dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanX ?? 40
  );
  const [stateY, setStateY] = useState(
    dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanY ?? 40
  );
  console.log(dataCafe, "카페");
  const [map, setMap] = useState<SeatData[][]>([]);

  console.log(data, "좌석");
  useEffect(() => {
    if (dataCafe !== undefined && data !== undefined) {
      setStateX(dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanX);
      setStateY(dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanY);
      const newArray = Array.from(
        Array(dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanY),
        () => {
          const result: SeatData[] = [];
          for (
            let i = 0;
            i < dataCafe?.fetchOneStudyCafeForAdminister.studyCafe_floorPlanX;
            i++
          ) {
            result.push({ status: "", seatId: "i", number: "" });
          }
          return result;
        }
      );
      console.log(newArray);
      data?.fetchAllSeatsByStudyCafeId.forEach((el) => {
        const seat = JSON.parse(el.seat_location);

        seat.map((ele: number[]) => {
          newArray[ele[1]][ele[0]].status = el.seat_number;
          newArray[ele[1]][ele[0]].seatId = el.seat_id;
          newArray[ele[1]][ele[0]].number = el.seat_number;
          return 1;
        });
      });
      setMap(newArray);
    }
  }, [data, dataCafe]);

  const image = (ele: SeatData, x: number, y: number): React.CSSProperties => {
    const result = {
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "none",
      borderTop: "none",
      backgroundColor: "none",
    };
    if (y + 1 <= stateY - 1) {
      if (ele.seatId !== map[y + 1][x].seatId) {
        result.borderBottom = "1px solid black";
      }
    }
    if (x + 1 <= stateX - 1) {
      if (ele.seatId !== map[y][x + 1].seatId) {
        result.borderRight = "1px solid black";
      }
    }
    if (Number(ele.number) >= 1) {
      result.backgroundColor = "#e4e4e4";
    }
    return result;
  };
  return (
    <>
      <div>좌석표 보기</div>
      <S.Container>
        <S.Box>
          {map.map((el, indY) => {
            return (
              <S.Box2 key={indY}>
                {el.map((ele, indX) => {
                  return (
                    <>
                      <S.Pixel style={image(ele, indX, indY)}>
                        {/* {ele.number} */}
                      </S.Pixel>
                    </>
                  );
                })}
              </S.Box2>
            );
          })}
        </S.Box>
      </S.Container>
    </>
  );
}
