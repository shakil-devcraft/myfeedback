// import PropTypes from "prop-types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";
import { navItems } from "../../api";

const NavItem = () => {
  return (
    <section>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-2 justify-center items-center text-center py-8 lg:py-9">
        {navItems?.map(({ itemName, img, link }, index) => (
          <NavLink
            key={index}
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
            <span>{itemName}</span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default NavItem;
