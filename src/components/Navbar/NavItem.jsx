import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

const NavItem = ({ label, img, link }) => {
  // console.log(link);
  return (
    <section>
      <div>
          <NavLink
            to={link}
            className={({ isActive }) =>
              twMerge(
                clsx(
                  "flex flex-col gap-5 pb-2 text-sm font-medium",
                  isActive
                    ? "text-b-color border-b-2 border-b-color"
                    : "text-l-color"
                )
              )
            }
          >
            <img className="mx-auto" src={img} alt="" />
            <span>{label}</span>
          </NavLink>
      </div>
    </section>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
