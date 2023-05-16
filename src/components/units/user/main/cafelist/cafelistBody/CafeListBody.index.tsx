// import { useRouter } from "next/router";
// import { useQuery } from "@apollo/client";

import InfiniteScroll from "react-infinite-scroller";
import CafeListItem from "./cafelistItem/CafeListItem.index";

export default function CafeListBody(): JSX.Element {
  //   const router = useRouter();

  // cafe data fetch 필요..
  //   const { data, fetchMore } = useQuery<
  //     Pick<IQuery, "fetchBoardComments">,
  //     IQueryFetchBoardCommentsArgs
  //   >(FETCH_BOARD_COMMENTS, {
  //     variables: { boardId: router.query.id },
  //   });

  // 무한스크롤
  //   const onLoadMore = (): void => {
  //     if (data === undefined) return;

  //     void fetchMore({
  //       variables: {
  //         page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
  //       },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         if (fetchMoreResult.fetchBoardComments === undefined) {
  //           return {
  //             fetchBoardComments: [...prev.fetchBoardComments],
  //           };
  //         }
  //         return {
  //           fetchBoardComments: [
  //             ...prev.fetchBoardComments,
  //             ...fetchMoreResult.fetchBoardComments,
  //           ],
  //         };
  //       },
  //     });
  //   };

  return (
    <>
      {/* <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}> */}

      <CafeListItem
      // key={el._id}
      // el={el}
      />

      {/* </InfiniteScroll> */}
    </>
  );
}
