import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapAsync, wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import * as S from "./review.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useMutationUpdateReview } from "../hooks/mutations/useMutationUpdateReview";
import { useMutationDeleteReview } from "../hooks/mutations/useMutationDeleteReview";
import { useRouter } from "next/router";
import { useQueryFetchReview } from "../hooks/queries/useQueryFetchLoginReviews";

interface IFormReviewData {
  review_content: string;
  visit_id: string | null;
}

interface IReviewProps {
  handleCancel: () => void;
  index: number;
  vId: string;
}

export default function EditReview(props: IReviewProps): JSX.Element {
  const router = useRouter();
  const [updateLoginReview] = useMutationUpdateReview();
  const [deleteLoginReview] = useMutationDeleteReview();
  const { data: allreviewdata, refetch: refetchFetchReview } =
    useQueryFetchReview();
  const { register, handleSubmit } = useForm<IFormReviewData>({
    mode: "onChange",
  });

  const onClickUpdateReview = async (data: IFormReviewData): Promise<void> => {
    try {
      await updateLoginReview({
        variables: {
          updateReviewInput: {
            review_content: data.review_content,
            review_id:
              allreviewdata?.fetchLoginReviewsByUserId[props.index].review_id ??
              "",
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
            review_id:
              allreviewdata?.fetchLoginReviewsByUserId[props.index].review_id ??
              "",
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
              allreviewdata?.fetchLoginReviewsByUserId[props.index]?.studyCafe
                ?.studyCafe_name
            }
          </S.CafeName>
          <S.VisitDate>
            {getDate(
              allreviewdata?.fetchLoginReviewsByUserId[props.index]
                ?.review_createdAt
            )}
          </S.VisitDate>
        </S.Title>
        <S.ImgWrapper>
          <S.CafeImg
            src={
              allreviewdata?.fetchLoginReviewsByUserId[props.index]?.studyCafe
                ?.images[props.index]?.image_url ?? undefined
            }
          ></S.CafeImg>
        </S.ImgWrapper>
        <S.ReviewWrapper
          onSubmit={wrapFormAsync(handleSubmit(onClickUpdateReview))}
        >
          <S.ReviewTitle>작성된 리뷰를 수정해주세요.</S.ReviewTitle>

          <S.ReviewInput
            {...register("review_content")}
            defaultValue={
              allreviewdata?.fetchLoginReviewsByUserId[props.index]
                ?.review_content ?? ""
            }
          ></S.ReviewInput>

          <S.BtnWrapper>
            <S.ReviewEditBtn>수정</S.ReviewEditBtn>
            <S.ReviewDeleteBtn
              type="button"
              onClick={wrapAsync(onClickDeleteReview)}
            >
              삭제
            </S.ReviewDeleteBtn>
          </S.BtnWrapper>
        </S.ReviewWrapper>
      </S.Wrapper>
    </>
  );
}
