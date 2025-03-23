import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import "../styles/HeroCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const HeroCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    `${import.meta.env.VITE_SERVER_URL}/public/homepage/DogsPool.jpg`,
    `${import.meta.env.VITE_SERVER_URL}/public/homepage/DogsCar.jpg`,
    `${import.meta.env.VITE_SERVER_URL}/public/homepage/DogsParis.jpg`,
  ];

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <h1 className="text-6xl md:text-8xl font-volkhov font-extrabold mb-6 drop-shadow-2xl text-center">
                  Welcome to PawPal!
                </h1>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full text-lg font-volkhov drop-shadow-lg"
                >
                  Become a Pal
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
