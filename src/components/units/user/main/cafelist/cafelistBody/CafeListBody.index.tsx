import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchAllStudyCafes } from "../../../../../commons/hooks/queries/useQueryFetchAllStudyCafes";
import CafeListItem from "./cafelistItem/CafeListItem.index";

interface Props {
  selectedDistrict: string;
}

export default function CafeListBody(props: Props): JSX.Element {
  const { selectedDistrict } = props;
  const { data, fetchMore } = useQueryFetchAllStudyCafes({
    studyCafe_city: "서울",
    studyCafe_district: selectedDistrict,
    page: 1,
  });

  const filteredCafes = data?.fetchAllStudyCafes.filter(
    (cafe) => cafe?.studyCafe_district === selectedDistrict
  );

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        fetchAllStudyCafesInput: {
          studyCafe_city: "서울",
          studyCafe_district: selectedDistrict,
          page: Math.ceil((data.fetchAllStudyCafes.length ?? 10) / 10) + 1,
        },
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchAllStudyCafes === undefined) {
          return {
            fetchAllStudyCafes: [...previousQueryResult.fetchAllStudyCafes],
          };
        }
        return {
          fetchAllStudyCafes: [
            ...previousQueryResult.fetchAllStudyCafes,
            ...fetchMoreResult.fetchAllStudyCafes,
          ],
        };
      },
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
        // width: 1410,
      }}
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={Boolean(data?.fetchAllStudyCafes)}
        useWindow={true}
      >
        {filteredCafes?.map((el) => (
          <CafeListItem key={el.studyCafe_id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
