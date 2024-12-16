import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Card = ({ image, title, description, rating, views }) => {
  return (
    <div className={twMerge(clsx("px-3 lg:p-4"))}>
      <div
        className={twMerge(
          clsx(
            "rounded-lg shadow-md overflow-hidden bg-white",
            "flex flex-col justify-between h-full"
          )
        )}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[213px] object-cover rounded-t-lg"
        />
        <div className="px-3 lg:p-4 text-l-color">
          <h3 className="font-semibold text-d-color font-lexend text-lg mb-1">{title}</h3>
          <p className="text-l-color font-roboto font-normal text-sm">{description}</p>
          <div className="flex items-center mt-3 gap-2">
            {/* Render Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span className="text-white bg-[#E8A641] w-4 h-4 text-base p-1 rounded-sm flex justify-center items-center text-center" key={index}>&#9733;</span> // Unicode Star
              ))}
            </div>
            {/* <span className="text-sm font-bold font-lexend text-d-color ml-2">{`${rating} <span>(${views})</span>`}</span> */}
            {
              <div className="flex gap-1">
                <span className="text-d-color font-lexend font-bold">{rating}</span>
                <span>({views})</span>
              </div>
            }
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
  views: PropTypes.string.isRequired,
};

export default Card;
