import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../shared/TestimonialCard";
import { userData } from "../../api";

const TestimonialSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="me-4">
      <Slider {...sliderSettings}>
        {userData?.map((user, index) => (
          <TestimonialCard key={index} user={user} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
