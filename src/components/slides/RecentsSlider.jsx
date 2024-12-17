import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recentsActivities } from "../../api";
import ActivitiesCard from "../shared/ActivitiesCard";

const RecentsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2,
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
          {recentsActivities?.map((item, index) => (
              <ActivitiesCard
              key={index}
              userImg={item?.userImg}
              user={item?.user}
              userLocation={item?.userLocation}
              date={item?.date}
              description={item?.description}
              img={item?.img}
            />
          ))}
      </Slider>
    </section>
  );
};

export default RecentsSlider;
