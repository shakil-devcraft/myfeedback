import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../shared/SlideCardOne";
import { RestaurantsData } from "../../api";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-b-color rounded-lg p-8">
      <h2 className="text-white text-2xl md:text-3xl font-normal font-lexend text-center md:text-start lg:pl-2 mb-6">
        Find the best restaurant ratings below
      </h2>
      <Slider {...settings}>
        {RestaurantsData.map((item) => (
          <Card
            key={item?.id}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            rating={item?.rating}
            views={item?.views}
          />
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
