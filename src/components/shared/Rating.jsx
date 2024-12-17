import PropTypes from "prop-types";

const Rating = ({ rating, percentage }) => {
  return (
      <div className="flex items-center space-x-4 w-full">
        <span className="text-sm font-medium min-w-[50px]">
          {rating} star{rating > 1 ? "s" : ""}
        </span>
        <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-b-color transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Rating;
