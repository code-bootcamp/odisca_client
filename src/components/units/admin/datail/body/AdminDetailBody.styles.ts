import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Body = styled.main`
  width: 1300px;
  margin: 0 auto;
`;
export const SliderItem = styled.img`
  width: 100%;
  height: 250px;
  margin: 0 auto;
`;
export const StyledSlider = styled(Slider)`
  .slick-arrow {
    z-index: 10;
    width: 50px;
    height: 50px;
  }
  .slick-prev::before,
  .slick-next::before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
  }
  .slick-prev {
    left: 27%;
  }
  .slick-next {
    right: 27%;
  }
  .slick-prev::before {
    background: #fff url("/left.png") center no-repeat;
  }
  .slick-next::before {
    background: #fff url("/right.png") center no-repeat;
  }
  .slick-slide {
    opacity: 0.6;
    transition: opacity 0.5s ease-in-out;
  }
  .slick-center {
    opacity: 1;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  /* .slick-center .slider-img {
    width: 80%;
    height: auto;
  }
  .slider-img {
    width: 100%;
    height: auto;
    opacity: 1;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  } */
`;

export const ContentsWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const ContentsBox = styled.article`
  width: 1000px;
  margin-top: 50px;
`;
export const Contents = styled.p`
  color: #4f4f4f;
  line-height: 30px;
  margin-bottom: 50px;
  padding-left: 20px;
  font-size: 18px;
`;
