import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const ActivitiesCard = ({
  userImg,
  user,
  userLocation,
  date,
  description,
  img
}) => {
  return (
    <div className={twMerge(clsx("p-3 md:p-4"))}>
      {/* Render Stars */}
      {/* <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            className="text-white bg-[#E8A641] w-4 h-4 text-base p-1 rounded-sm flex justify-center items-center text-center"
            key={index}
          >
            &#9733;
          </span> // Unicode Star
        ))}
      </div> */}

    </div>
  );
};

ActivitiesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ActivitiesCard;
