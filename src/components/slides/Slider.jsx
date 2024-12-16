import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../shared/SlideCardOne";

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

  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Bottega",
      description: "The lorem ipsum is in printing...",
      rating: "5.0 (876 reviews)",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "Bottega",
      description: "The lorem ipsum is in printing...",
      rating: "5.0 (876 reviews)",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Bottega",
      description: "The lorem ipsum is in printing...",
      rating: "5.0 (876 reviews)",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200",
      title: "Bottega",
      description: "The lorem ipsum is in printing...",
      rating: "5.0 (876 reviews)",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200",
      title: "Bottega",
      description: "The lorem ipsum is in printing...",
      rating: "5.0 (876 reviews)",
    },
  ];

  return (
    <section className="bg-b-color rounded-lg p-8">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        Find the best restaurant ratings below
      </h2>
      <Slider {...settings}>
        {data.map((item) => (
          <Card
            key={item?.id}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            rating={item?.rating}
          />
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
