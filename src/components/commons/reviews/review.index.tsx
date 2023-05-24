import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCreateReview } from "../hooks/mutations/useMutationCreateReview";
import { useQueryFetchLoginUser } from "../hooks/queries/useQueryFetchLoginUser";
import * as S from "./review.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useQueryFetchReview } from "../hooks/queries/useQueryFetchLoginReviews";

interface IFormReviewData {
  review_content: string;
  visit_id: string;
}

export default function Review(): JSX.Element {
  const [createLoginReview] = useMutationCreateReview();
  const { data: reviewdata } = useQueryFetchReview();
  const { data: fetchUserdata } = useQueryFetchLoginUser();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickSubmitReview = async (data: IFormReviewData): Promise<void> => {
    try {
      const result = await createLoginReview({
        variables: {
          createReviewInput: {
            review_content: data.review_content,
            visit_id: reviewdata?.fetchLoginReviewsByUserId[0].review_content,
          },
        },
      });
      console.log(result);
      Modal.success({
        content: "",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "다시 시도해주세요!",
        });
    }
  };

  console.log(reviewdata?.fetchLoginReviewsByUserId[0].review_content, "댓글");
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.CafeName>
            {fetchUserdata?.fetchLoginUser.visits[0].studyCafe.studyCafe_name}
          </S.CafeName>
          <S.VisitDate>
            {getDate(fetchUserdata?.fetchLoginUser.visits[0].visit_createdAt)}
          </S.VisitDate>
        </S.Title>
        <S.ImgWrapper>
          <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
        </S.ImgWrapper>
        <S.ReviewWrapper
          onSubmit={wrapFormAsync(handleSubmit(onClickSubmitReview))}
        >
          <S.ReviewTitle>리뷰를 작성해주세요.</S.ReviewTitle>
          <S.ReviewInput
            {...register("review_content")}
            placeholder="무분별한 비방, 욕설 등 타인을 불쾌하게 하는 리뷰는 사전 통보 없이 삭제될 수 있습니다."
            defaultValue={
              reviewdata?.fetchLoginReviewsByUserId[0].review_content
            }
          ></S.ReviewInput>
          <S.ReviewBtn>등록</S.ReviewBtn>
        </S.ReviewWrapper>
      </S.Wrapper>
    </>
  );
}
