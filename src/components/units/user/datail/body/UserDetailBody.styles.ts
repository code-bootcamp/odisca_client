import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Body = styled.main`
  width: 100%;
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
`;
export const ContentsBox = styled.article`
  margin-top: 50px;
`;
export const Contents = styled.p`
  color: #4f4f4f;
  line-height: 30px;
`;
export const InfoBox = styled.div`
  border-top: 1px solid #bdbdbd;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const DevidedLine = styled.line`
  margin-top: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Label = styled.label`
  margin-left: 5px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Detail = styled.div`
  margin-top: 10px;
`;
