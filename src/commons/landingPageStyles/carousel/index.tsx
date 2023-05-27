import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
`;
const CarouselBg = styled.img`
  background: linear-gradient(to right, #283048, #859398);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 400px;
  width: 100vw;
`;
const MySlider = styled(Slider)`
  .slick-slide {
    cursor: pointer;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 10px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: #d9d9d9;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: -35px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
    margin-top: -35px;
  }
  .slick-next {
    font-size: 50px;
    z-index: 999;
    top: 50%;
    padding-left: 500px;
  }
`;

export default function Carousel(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 700,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <MySlider {...settings}>
        <div>
          <CarouselBg src={"/cafeImg.jpeg"} />
        </div>
        <div>
          <CarouselBg src={"/cafeImg.jpeg"} />
        </div>
        <div>
          <CarouselBg src={"/cafeImg.jpeg"} />
        </div>
        <div>
          <CarouselBg src={"/cafeImg.jpeg"} />
        </div>
      </MySlider>
    </Wrapper>
  );
}
