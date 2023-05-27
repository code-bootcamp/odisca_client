import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapAsync, wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCreateReview } from "../hooks/mutations/useMutationCreateReview";
import { useQueryFetchLoginUser } from "../hooks/queries/useQueryFetchLoginUser";
import * as S from "./review.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useQueryFetchReview } from "../hooks/queries/useQueryFetchLoginReviews";
import { useMutationUpdateReview } from "../hooks/mutations/useMutationUpdateReview";
import { useMutationDeleteReview } from "../hooks/mutations/useMutationDeleteReview";
import { useRouter } from "next/router";

interface IFormReviewData {
  review_content: string;
  visit_id: string;
}

interface IReviewProps {
  handleCancel: () => void;
}

export default function Review(props: IReviewProps): JSX.Element {
  const router = useRouter();
  const [createLoginReview] = useMutationCreateReview();
  const [updateLoginReview] = useMutationUpdateReview();
  const [deleteLoginReview] = useMutationDeleteReview();
  const { data: reviewdata, refetch: refetchFetchReview } =
    useQueryFetchReview();
  const { data: fetchUserdata } = useQueryFetchLoginUser();
  const { register, handleSubmit } = useForm<IFormReviewData>({
    mode: "onChange",
  });
  const review = reviewdata?.fetchLoginReviewsByUserId[0]?.review_content;

  const onClickSubmitReview = async (data: IFormReviewData): Promise<void> => {
    try {
      const result = await createLoginReview({
        variables: {
          createReviewInput: {
            review_content: data.review_content,
            visit_id: fetchUserdata?.fetchLoginUser.visits[0]?.visit_id ?? "",
          },
        },
      });
      if (refetchFetchReview !== undefined) {
        await refetchFetchReview();
      }
      console.log(result);
      Modal.success({
        content: "리뷰가 등록되었습니다.",
      });
      props.handleCancel();
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "다시 시도해주세요!",
        });
    }
  };

  const onClickUpdateReview = async (data: IFormReviewData): Promise<void> => {
    try {
      const result = await updateLoginReview({
        variables: {
          updateReviewInput: {
            review_content: data.review_content,
            review_id: reviewdata?.fetchLoginReviewsByUserId[0].review_id ?? "",
          },
        },
      });
      if (refetchFetchReview !== undefined) {
        await refetchFetchReview();
      }
      void router.push("/user/mypage");

      console.log(result);
      Modal.success({
        content: "리뷰가 수정되었습니다.",
      });
      props.handleCancel();
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "다시 시도해주세요!",
        });
    }
  };

  const onClickDeleteReview = async (): Promise<void> => {
    try {
      const result = await deleteLoginReview({
        variables: {
          cancelReviewInput: {
            review_id: reviewdata?.fetchLoginReviewsByUserId[0].review_id ?? "",
          },
        },
      });
      console.log(result);
      Modal.success({
        content: "리뷰가 삭제되었습니다.",
      });
      if (refetchFetchReview !== undefined) {
        await refetchFetchReview();
      }
      props.handleCancel();
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "이미 삭제된 리뷰입니다.",
        });
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.CafeName>
            {fetchUserdata?.fetchLoginUser.visits[0]?.studyCafe.studyCafe_name}
          </S.CafeName>
          <S.VisitDate>
            {getDate(fetchUserdata?.fetchLoginUser.visits[0]?.visit_createdAt)}
          </S.VisitDate>
        </S.Title>
        <S.ImgWrapper>
          <S.CafeImg src="/cafeImg.jpeg"></S.CafeImg>
        </S.ImgWrapper>
        <S.ReviewWrapper
          onSubmit={
            review !== undefined
              ? wrapFormAsync(handleSubmit(onClickUpdateReview))
              : wrapFormAsync(handleSubmit(onClickSubmitReview))
          }
        >
          {review !== undefined ? (
            <S.ReviewTitle>작성된 리뷰를 수정해주세요.</S.ReviewTitle>
          ) : (
            <S.ReviewTitle>리뷰를 작성해주세요.</S.ReviewTitle>
          )}
          <S.ReviewInput
            {...register("review_content")}
            placeholder="무분별한 비방, 욕설 등 타인을 불쾌하게 하는 리뷰는 사전 통보 없이 삭제될 수 있습니다."
            defaultValue={
              reviewdata?.fetchLoginReviewsByUserId[0]?.review_content ?? ""
            }
          ></S.ReviewInput>
          {review !== undefined ? (
            <S.BtnWrapper>
              <S.ReviewEditBtn>수정</S.ReviewEditBtn>
              <S.ReviewDeleteBtn
                type="button"
                onClick={wrapAsync(onClickDeleteReview)}
              >
                삭제
              </S.ReviewDeleteBtn>
            </S.BtnWrapper>
          ) : (
            <S.ReviewCreateBtn>등록</S.ReviewCreateBtn>
          )}
        </S.ReviewWrapper>
      </S.Wrapper>
    </>
  );
}
