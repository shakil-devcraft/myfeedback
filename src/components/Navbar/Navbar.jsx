// import { navItems } from "../../api";
import Container from "../shared/Container/Container";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="w-full z-50 shadow bg-white">
      <div className="border-b">
        <Container>
          {/* Top Navbar */}
          <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:py-3 py-6 gap-5">
            <div className="text-b-color font-bold text-lg">
              <img src="/img/myfeedback.png" alt="" />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex items-center border rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="restaurant, hotel, service..."
                  className="w-1/2 px-4 py-2 focus:outline-none"
                />
                <div className="border-l px-4 py-2 text-l-color">
                  <input
                    type="text"
                    placeholder="Singapore..."
                    className="w-1/2 focus:outline-none"
                  />
                </div>
                <button className="bg-b-color hover:bg-blue-600 text-white px-4 py-2">
                  <i className="text-lg bx bx-search-alt-2"></i>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <img src="/img/world.png" alt="" />
              </button>
              <button className="bg-d-color text-white px-4 py-2 rounded-full">
                MyFeedback for business
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* Bottom Navbar */}
      {/* <section>
        <Container>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-2 justify-center items-center text-center py-3">
            {navItems?.map((item, index) => (
              <NavItem
                key={index}
                label={item?.itemName}
                img={item?.img}
                link={item?.link}
              />
            ))}
          </div>
        </Container>
      </section> */}

      {/* Bottom Navbar */}
      <section>
        <Container>
            <NavItem />
        </Container>
      </section>
    </nav>
  );
};

export default Navbar;
