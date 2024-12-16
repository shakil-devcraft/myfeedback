import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Card = ({ image, title, description, rating }) => {
  return (
    <div className={twMerge(clsx("p-2"))}>
      <div
        className={twMerge(
          clsx(
            "rounded-lg shadow-md overflow-hidden bg-white",
            "flex flex-col items-center justify-between h-full"
          )
        )}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
          <div className="flex items-center mt-3">
            {/* Render Stars */}
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>&#9733;</span> // Unicode Star
              ))}
            </div>
            <span className="text-sm font-bold ml-2">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Card;
