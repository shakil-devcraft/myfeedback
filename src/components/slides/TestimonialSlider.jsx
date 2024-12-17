import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ user }) => {
  const { name, location, date, rating, description, images } = user;

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 h-full">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xl">&#128100;</span>
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>

        {/* Rating & Date */}
        <div className="flex items-center gap-2 my-3">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < rating ? "★" : "☆"} {/* Filled/Empty stars */}
              </span>
            ))}
          </div>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">
          {description.length > 150 ? description.slice(0, 150) + "..." : description}
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="user feedback"
              className="w-full h-20 object-cover rounded"
            />
          ))}
        </div>

        {/* Discover Link */}
        <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">
          Discover
        </a>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

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

  const userData = [
    {
      name: "Leslie Sakho",
      location: "Canada, Toronto",
      date: "09/11/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [
        // "https://via.placeholder.com/100",
        "/img/recents-p (1).png",
        "/img/recents-p (2).png",
        "/img/recents-p (3).png",
      ],
    },
    {
      name: "Chris Macari",
      location: "Singapore",
      date: "14/09/2023",
      rating: 4,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is in printing.",
      images: [
        "/img/recents-p (1).png",
        "/img/recents-p (2).png",
        "/img/recents-p (3).png",
      ],
    },
    {
      name: "Jojo Alba",
      location: "Kuala Lumpur",
      date: "28/09/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [
        "/img/recents-p (1).png",
        "/img/recents-p (2).png",
        "/img/recents-p (3).png",
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <Slider {...sliderSettings}>
        {userData.map((user, index) => (
          <TestimonialCard key={index} user={user} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
