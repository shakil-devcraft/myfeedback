// import { navItems } from "../../api";
import { useLocation } from "react-router-dom";
import Button from "../shared/Button/Button";
import Container from "../shared/Container/Container";
import NavItem from "./NavItem";

const Navbar = () => {

  const loc = useLocation("/");
  console.log(loc);

  return (
    <nav className={`w-full z-50 shadow bg-white`}>
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
              <Button label="MyFeedback for business" className="bg-d-color text-white px-4 py-2 md:py-2 font-roboto font-normal rounded-full" />
            </div>
          </div>
        </Container>
      </div>
      
      {/* Bottom Navbar */}
      {/* {
        !loc && <section>
        <Container>
            <NavItem />
        </Container>
      </section>
      } */}
      <section>
        <Container>
            <NavItem />
        </Container>
      </section>
    </nav>
  );
};

export default Navbar;
