import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { useQueryFetchOneStudyCafeForUser } from "../../../commons/hooks/queries/useQueryFetchStudyCafeForUser";
import { ISeat } from "../../../../commons/types/generated/types";
import { useMutationCreatePayment } from "../../../commons/hooks/mutations/useMutationCreatePayment";
import PayModal from "./mapSanner.PayModal";

export default function SeatReservationPage(): JSX.Element {
  const router = useRouter();
  const { data: dataCafe } = useQueryFetchOneStudyCafeForUser(
    String(router.query.Id)
  );
  const { data } = useQueryFetchAllSeatsByStudyCafeId(String(router.query.Id));
  const [isModal, setIsModal] = useState(false);
  const [stateX, setStateX] = useState(
    dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanX ?? 40
  );
  const [stateY, setStateY] = useState(
    dataCafe?.fetchOneStudyCafeForUser.studyCafe_floorPlanY ?? 40
  );
  console.log(dataCafe, "카페");
  const [seatId, setSeatId] = useState("");
  const [seatStatus, setSeatStatus] = useState("");
  const [seatNumber, setSeatNumber] = useState(0);
  const [seatUsable, setSeatUsable] = useState(false);
  const [map, setMap] = useState([]);
  const [duringTime, setDuringTime] = useState(1);
  const [createPayment] = useMutationCreatePayment();
  const [isPayModal, setIsPayModal] = useState(false);
  const [remainTime, setRemainTime] = useState(0);

  console.log(data?.fetchAllSeatsByStudyCafeId);
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

  const Pixel = styled.div`
    width: 20px;
    height: 20px;
    font-size: 14px;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px solid black;
  `;
  const Box2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

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

  const onClickInfo = (seat: any) => () => {
    if (seat.status === "empty") {
      return;
    }
    if (seat.status === "") {
      setSeatStatus("예약 가능한 좌석입니다.");
      setRemainTime(0);
      setSeatUsable(true);
    } else {
      setSeatStatus("예약 불가능한 좌석입니다.");
      setRemainTime(seat.time);
    }
    setSeatId(seat.seatId);
    setSeatNumber(seat.number);
    setIsModal(true);
  };

  const toggleModal = (): void => {
    setSeatUsable(false);
    setIsModal(false);
  };

  const submitReservation = async (): Promise<void> => {
    try {
      await createPayment({
        variables: {
          createPaymentInput: {
            studyCafe_id: String(router.query.Id),
            payment_point:
              duringTime *
              Number(dataCafe?.fetchOneStudyCafeForUser.studyCafe_timeFee),
            payment_time: duringTime,
            seat_id: seatId,
          },
        },
      });
    } catch (err) {
      alert("포인트가 부족합니다.");
      setIsModal(false);
      setIsPayModal(true);
    }

    console.log(seatId, seatNumber);
    setSeatUsable(false);
    setIsModal(false);
  };

  const onChangeTime = (event: ChangeEvent<HTMLSelectElement>): void => {
    setDuringTime(Number(event.target.value));
    console.log(Number(event.target.value));
  };

  return (
    <>
      <div>좌석표 보기</div>

      <Container>
        <Box>
          {map.map((el, indY) => {
            return (
              <Box2 key={indY}>
                {el.map((ele, indX: number) => {
                  return (
                    <>
                      <Pixel
                        style={image(ele, indX, indY)}
                        onClick={onClickInfo(ele)}
                      ></Pixel>
                    </>
                  );
                })}
              </Box2>
            );
          })}
        </Box>
      </Container>
      {isModal ? (
        <Modal
          open={isModal}
          title="Title"
          footer={[
            <button
              key={"reservation"}
              onClick={submitReservation}
              disabled={!seatUsable}
            >
              예약
            </button>,
            <button key={"cancel"} onClick={toggleModal}>
              취소
            </button>,
          ]}
        >
          <div>좌석 번호 : {seatNumber}</div>
          <div>좌석 종류 : {seatStatus}</div>
          {remainTime !== 0 ? (
            <div>{String(remainTime) + "분 남았습니다."}</div>
          ) : (
            <></>
          )}

          <select onChange={onChangeTime} disabled={!seatUsable}>
            <option value={1}>1시간</option>
            <option value={2}>2시간</option>
            <option value={3}>3시간</option>
            <option value={4}>4시간</option>
            <option value={5}>5시간</option>
          </select>
        </Modal>
      ) : (
        <></>
      )}
      <PayModal
        isPayModal={isPayModal}
        setIsPayModal={setIsPayModal}
      ></PayModal>
    </>
  );
}
