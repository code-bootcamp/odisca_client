import { useRouter } from "next/router";
import { useQueryFetchAllSeatsByStudyCafeId } from "../../../../src/components/commons/hooks/queries/useQueryFetchAllSeatsByStudyCafeId";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useQueryFetchStudyCafe } from "../../../../src/components/commons/hooks/queries/useQueryFetchStudyCafe";

export default function SeatMapScanPage(): JSX.Element {
  const router = useRouter();
  const { data: dataCafe } = useQueryFetchStudyCafe(String(router.query.Id));
  const { data } = useQueryFetchAllSeatsByStudyCafeId(String(router.query.Id));
  const [isModal, setIsModal] = useState(false);
  // 아직 카페에 x길이 y길이가 등록되지 않아서 하드 코딩한 것
  const [stateX, setStateX] = useState(
    dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanX ?? 40
  );
  const [stateY, setStateY] = useState(
    dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanY ?? 40
  );
  console.log(dataCafe, "카페");
  const [seatId, setSeatId] = useState("");
  const [seatStatus, setSeatStatus] = useState("");
  const [seatNumber, setSeatNumber] = useState(0);
  const [seatUsable, setSeatUsable] = useState(false);
  const [map, setMap] = useState([]);

  console.log(data?.fetchAllSeatsByStudyCafeId);
  useEffect(() => {
    if (dataCafe !== undefined && data !== undefined) {
      setStateX(dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanX);
      setStateY(dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanY);
      const newArray = Array.from(
        Array(dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanY),
        () => {
          const result = [];
          for (
            let i = 0;
            i < dataCafe?.fetchOneStudyCafe.studyCafe_floorPlanX;
            i++
          ) {
            result.push({ status: 0, seatId: "i", number: 0 });
          }
          return result;
        }
      );
      console.log(newArray);
      data?.fetchAllSeatsByStudyCafeId.map((el) => {
        const seat = JSON.parse(el.seat_location);

        seat.map((ele) => {
          newArray[ele[1]][ele[0]].status = el.seat_number;
          newArray[ele[1]][ele[0]].seatId = el.seat_id;
          newArray[ele[1]][ele[0]].number = el.seat_number;
          return 1;
        });
      });
      setMap(newArray);
    }
  }, [data, dataCafe]);

  const Pixel = styled.div`
    width: 20px;
    height: 20px;
    font-size: 14px;
    /* border: 0.5px solid black; */
    /* margin: 0.5px; */
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
    if (ele.number >= 1) {
      result.backgroundColor = "#e4e4e4";
    }
    // if (ele.number === 2) {
    //   result.backgroundColor = "#323232";
    // }

    return result;
  };

  const onClickInfo = (seat: any) => () => {
    if (seat.number === 0) {
      return;
    }
    if (seat.number >= 1) {
      setSeatStatus("예약 가능한 좌석입니다.");
      setSeatUsable(true);
    }
    setSeatId(seat.seatId);
    setSeatNumber(seat.number);
    setIsModal(true);
  };
  const toggleModal = (): void => {
    setIsModal(false);
  };
  const submitReservation = (): void => {
    console.log(seatId, seatNumber);
    setIsModal(false);
  };

  //   console.log(map);
  return (
    <>
      <div>좌석표 보기</div>

      <Container>
        <Box>
          {map.map((el, indY) => {
            return (
              <Box2 key={indY}>
                {el.map((ele, indX) => {
                  return (
                    <>
                      <Pixel
                        style={image(ele, indX, indY)}
                        onClick={onClickInfo(ele)}
                      >
                        {/* {ele.number} */}
                      </Pixel>
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

          <select disabled={!seatUsable}>
            <option value={1}>1시간</option>
            <option value={2}>2시간</option>
            <option value={3}>3시간</option>
            <option value={4}>4시간</option>
          </select>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
