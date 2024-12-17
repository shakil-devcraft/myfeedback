
import PropTypes from "prop-types";


const TestimonialCard = ({ user }) => {
  const { name, location, date, description, images } = user;

  return (
    <div className="p-4">
      <div className="bg-[#F8F8F8] shadow-lg rounded-lg p-4 h-full">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-l-color text-xl">&#128100;</span>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-d-color font-roboto">{name}</h3>
            <p className="text-l-color text-sm font-normal">{location}</p>
          </div>
        </div>

        {/* Rating & Date */}
        <div className="flex items-center gap-2 my-3">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                className="text-white bg-[#E8A641] w-4 h-4 text-base p-1 rounded-sm flex justify-center items-center text-center"
                key={index}
              >
                &#9733;
              </span> // Unicode Star
            ))}
          </div>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 py-3">
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
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
        <a href="#" className="text-d-color font-medium font-lexend underline mt-4 inline-block">
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
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};


export default TestimonialCard;