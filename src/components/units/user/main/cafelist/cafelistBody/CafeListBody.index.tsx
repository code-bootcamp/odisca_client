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
  console.log(data, "datacafes");
  const filteredCafes = data?.fetchAllStudyCafes.filter(
    (cafe) => cafe.studyCafe_district === selectedDistrict
  );

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchAllStudyCafes.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchAllStudyCafes === undefined) {
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
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {filteredCafes?.map((el) => (
          <CafeListItem key={el.studyCafe_id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
