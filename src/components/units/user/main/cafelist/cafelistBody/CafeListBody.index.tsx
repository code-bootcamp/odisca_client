// import { useRouter } from "next/router";
// import { useQuery } from "@apollo/client";

import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchAllStudyCafes } from "../../../../../commons/hooks/queries/useQueryFetchAllStudyCafes";
import CafeListItem from "./cafelistItem/CafeListItem.index";

export default function CafeListBody(): JSX.Element {
  //   const router = useRouter();

  const { data, fetchMore } = useQueryFetchAllStudyCafes();

  console.log(data);
  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchAllStudyCafes.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchAllStudyCafes === undefined) {
          return {
            fetchAllStudyCafes: [...prev.fetchAllStudyCafes],
          };
        }
        return {
          fetchAllStudyCafes: [
            ...prev.fetchAllStudyCafes,
            ...fetchMoreResult.fetchAllStudyCafes,
          ],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchAllStudyCafes.map((el) => (
          <CafeListItem key={el.studyCafe_id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
