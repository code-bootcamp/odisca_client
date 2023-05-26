import { useRouter } from "next/router";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../../../components/commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { useEffect, useState } from "react";
import * as S from "./seatScan.Style";
import { useQueryFetchOneStudyCafeForUser } from "../../../../../components/commons/hooks/queries/useQueryFetchStudyCafeForUser";

export default function SeatScanPage(): JSX.Element {
  const router = useRouter();
  const { data: dataCafe } = useQueryFetchOneStudyCafeForUser(
    String(router.query.Id)
  );
  const { data } = useQueryFetchAllSeatsByStudyCafeId(String(router.query.Id));
  const [stateX, setStateX] = useState(
    dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanX ?? 40
  );
  const [stateY, setStateY] = useState(
    dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanY ?? 40
  );
  console.log(dataCafe, "카페");
  const [map, setMap] = useState([]);

  console.log(data, "좌석");
  useEffect(() => {
    if (dataCafe !== undefined && data !== undefined) {
      setStateX(dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanX);
      setStateY(dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanY);
      const newArray = Array.from(
        Array(dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanY),
        () => {
          const result = [];
          for (
            let i = 0;
            i < dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanX;
            i++
          ) {
            result.push({ status: "empty", seatId: "i", number: "", time: 0 });
          }
          return result;
        }
      );
      data?.fetchAllSeatsByStudyCafeId.map((el: ISeat) => {
        const seat = JSON.parse(el.seat_location);

        seat.map((ele) => {
          newArray[ele[1]][ele[0]].status = el.user ? el.user?.user_id : "";
          newArray[ele[1]][ele[0]].seatId = el.seat_id;
          newArray[ele[1]][ele[0]].number = el.seat_number;
          newArray[ele[1]][ele[0]].time = Math.floor(
            (el.seat_remainTime ?? 0) / 60000
          );
        });
      });
      setMap(newArray);
    }
  }, [data, dataCafe, router]);

  const image = (ele: any, x: number, y: number) => {
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
    if (ele.status === "") {
      result.backgroundColor = "#e4e4e4";
    }
    if (ele.status !== "empty" && ele.status !== "") {
      result.backgroundColor = "#323232";
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
                      <S.Pixel style={image(ele, indX, indY)}></S.Pixel>
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
