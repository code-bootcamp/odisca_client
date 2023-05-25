// import { useMutationCreateLoginStudyCafe } from "../mutations/useMutationCreateLoginStudyCafe";
// import { useRouter } from "next/router";

// export const useCreateLoginStudyCafe = () => {
//   const router = useRouter();
//   const [createLoginStudyCafe] = useMutationCreateLoginStudyCafe();

//   const onClickCafeSubmit = async (data): Promise<void> => {
//     try {
//       const result = await createLoginStudyCafe({
//         variables: {
//           createStudyCafeInput: {
//             name: data.name,
//             // address: data.address,
//             contact: data.contact,
//             timeFee: Number(data.timeFee),
//             description: String(data.description),
//             operatingTime: data.operatingTime,
//             // lat: data.lat,
//             // lon: data.lon,
//             brn: data.brn,
//           },
//         },
//       });
//       console.log(result);
//       alert("상품등록이 완료되었습니다.");
//       void router.push(`/admin/${result.data?.createLoginStudyCafe.id}`);
//     } catch (error) {
//       alert("업체등록에 실패하였습니다");
//     }
//   };

//   return {
//     onClickCafeSubmit,
//   };
// };
