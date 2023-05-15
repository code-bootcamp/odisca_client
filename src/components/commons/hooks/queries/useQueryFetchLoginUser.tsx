// query를 훅으로 빼는 예시 참고

// import { gql, useQuery } from "@apollo/client";
// import {
//   IQuery,
//   IQueryFetchUseditemArgs,
// } from "../../../../commons/types/generated/types";

// export const FETCH_USED_ITEM = gql
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       images
//       pickedCount
//       createdAt
//       seller {
//         name
//       }
//       useditemAddress {
//         lat
//         lng
//         address
//         addressDetail
//       }
//     }
//   }
// ;

// export const useQueryFetchUseditem = (variables: IQueryFetchUseditemArgs) => {
//   const query = useQuery<
//     Pick<IQuery, "fetchUseditem">,
//     IQueryFetchUseditemArgs
//   >(FETCH_USED_ITEM, { variables });
//   return query;
// };
