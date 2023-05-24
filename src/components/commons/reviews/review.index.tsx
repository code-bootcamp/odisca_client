import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../commons/libraries/asyncFunc";
import { useMutationCreateReview } from "../hooks/mutations/useMutationCreateReview";
import * as S from "./review.styles";

interface IFormReviewData {
  review_content: string;
  // visit_id: string;
}

export default function Review(): JSX.Element {
  const [createLoginReview] = useMutationCreateReview();

  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmitReview = async (data: IFormReviewData): Promise<void> => {
    try {
      const result = await createLoginReview({
        variables: {
          createReviewInput: {
            review_content: data.review_content,
            // visit_id:
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "다시 시도해주세요!",
        });
    }
  };
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.CafeName>어디스카페</S.CafeName>
          <S.Seat>A16</S.Seat>
          <S.VisitDate>2023.05.16</S.VisitDate>
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
          ></S.ReviewInput>
          <S.ReviewBtn>등록</S.ReviewBtn>
        </S.ReviewWrapper>
      </S.Wrapper>
    </>
  );
}
