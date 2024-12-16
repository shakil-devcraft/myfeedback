import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, img, link }) => {
  // console.log(link);
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        twMerge(
          clsx(
            "flex flex-col items-center justify-center px-4 py-2 text-sm font-medium",
            isActive
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          )
        )
      }
    >
      <img src={img} alt="" />
      <span>{label}</span>
    </NavLink>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
