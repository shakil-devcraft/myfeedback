import { navItems } from "../../api";
import Container from "../shared/Container/Container";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 shadow bg-white">
      <Container>
        {/* Top Navbar */}
        <div className="flex justify-between items-center px-6 py-3 border-b">
          <div className="text-blue-600 font-bold text-lg">
            <img src="/img/myfeedback.png" alt="" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="restaurant, hotel, service..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <div className="border-l px-4 py-2 text-gray-500">
                <input
                  type="text"
                  placeholder="Singapore..."
                  className="focus:outline-none"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                <i className="text-lg bx bx-search-alt-2"></i>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <img src="/img/world.png" alt="" />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              MyFeedback for business
            </button>
          </div>
        </div>
      </Container>
      {/* Bottom Navbar */}
      <div className="flex items-center overflow-x-auto px-6 py-3 space-x-6 bg-gray-50">
        {navItems?.map((item, index) => (
          <NavItem
            key={index}
            label={item?.itemName}
            img={item?.img}
            link={item?.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
