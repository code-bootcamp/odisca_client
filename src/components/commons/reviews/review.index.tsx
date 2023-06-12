import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapAsync, wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCreateReview } from "../hooks/mutations/useMutationCreateReview";
import { useQueryFetchLoginUser } from "../hooks/queries/useQueryFetchLoginUser";
import * as S from "./review.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useMutationUpdateReview } from "../hooks/mutations/useMutationUpdateReview";
import { useMutationDeleteReview } from "../hooks/mutations/useMutationDeleteReview";
import { useRouter } from "next/router";
import { useQueryFetchLoginReviewByVisitId } from "../hooks/queries/useQueryFetchLoginReviewByVisitId";

interface IFormReviewData {
  review_content: string;
  visit_id: string | null;
}

interface IReviewProps {
  handleCancel: () => void;
  index: number;
  vId: string;
}

export default function Review(props: IReviewProps): JSX.Element {
  const router = useRouter();
  const [createLoginReview] = useMutationCreateReview();
  const [updateLoginReview] = useMutationUpdateReview();
  const [deleteLoginReview] = useMutationDeleteReview();
  const { data: reviewdata, refetch: refetchFetchReview } =
    useQueryFetchLoginReviewByVisitId(props.vId);
  const { data: fetchUserdata } = useQueryFetchLoginUser();
  const { register, handleSubmit } = useForm<IFormReviewData>({
    mode: "onChange",
  });

  const onClickSubmitReview = async (data: IFormReviewData): Promise<void> => {
    try {
      await createLoginReview({
        variables: {
          createReviewInput: {
            review_content: data.review_content,
            visit_id:
              fetchUserdata?.fetchLoginUser.visits[props.index]?.visit_id ?? "",
          },
        },
      });
      if (refetchFetchReview !== undefined) {
        await refetchFetchReview();
      }
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
      await updateLoginReview({
        variables: {
          updateReviewInput: {
            review_content: data.review_content,
            review_id: reviewdata?.fetchLoginReviewByVisitId.review_id ?? "",
          },
        },
      });

      if (refetchFetchReview !== undefined) {
        await refetchFetchReview();
      }
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
      await deleteLoginReview({
        variables: {
          cancelReviewInput: {
            review_id: reviewdata?.fetchLoginReviewByVisitId.review_id ?? "",
          },
        },
      });
      Modal.success({
        content: "리뷰가 삭제되었습니다.",
      });
      props.handleCancel();
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "이미 삭제된 리뷰입니다.",
        });
    }
    void router.push("/user/mypage");
  };
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.CafeName>
            {
              fetchUserdata?.fetchLoginUser.visits[props.index]?.studyCafe
                .studyCafe_name
            }
          </S.CafeName>
          <S.VisitDate>
            {getDate(
              fetchUserdata?.fetchLoginUser.visits[props.index]?.visit_createdAt
            )}
          </S.VisitDate>
        </S.Title>
        <S.ImgWrapper>
          <S.CafeImg
            src={
              fetchUserdata?.fetchLoginUser.visits[props.index]?.studyCafe
                .images[props.index]?.image_url ?? undefined
            }
          ></S.CafeImg>
        </S.ImgWrapper>
        <S.ReviewWrapper
          onSubmit={
            reviewdata?.fetchLoginReviewByVisitId.review_content !== undefined
              ? wrapFormAsync(handleSubmit(onClickUpdateReview))
              : wrapFormAsync(handleSubmit(onClickSubmitReview))
          }
        >
          {reviewdata?.fetchLoginReviewByVisitId.review_content !==
          undefined ? (
            <S.ReviewTitle>작성된 리뷰를 수정해주세요.</S.ReviewTitle>
          ) : (
            <S.ReviewTitle>리뷰를 작성해주세요.</S.ReviewTitle>
          )}
          <S.ReviewInput
            {...register("review_content")}
            placeholder="무분별한 비방, 욕설 등 타인을 불쾌하게 하는 리뷰는 사전 통보 없이 삭제될 수 있습니다."
            defaultValue={
              reviewdata?.fetchLoginReviewByVisitId?.review_content ?? ""
            }
          ></S.ReviewInput>
          {reviewdata?.fetchLoginReviewByVisitId.review_content !==
          undefined ? (
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
