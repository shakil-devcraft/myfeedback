import { allRestaurants } from "../../api";
import Button from "../../components/shared/Button/Button";

const All = () => {
  return (
    <section className="px-4 md:pl-6 lg:pl-20">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4">
        <div>
          <h4 className="font-roboto text-d-color font-semibold mb-3">
            Home / All restaurants
          </h4>
          <div className="flex justify-start items-center gap-6">
            <h1 className="font-extrabold font-lexend text-3xl text-d-color">
              best restaurants in singapore
            </h1>
            <Button
              label="Sort"
              leftIcon={<i className="bx bx-sort-down"></i>}
              className="font-medium text-l-color text-base bg-transparent rounded-full border-2 py-2 md:py-1 px-4"
            />
          </div>

          <div className="flex flex-col gap-6 my-10">
            {allRestaurants?.map(
              ({ img, title, description, rating, views }, index) => (
                <div className="flex flex-col lg:flex-row" key={index}>
                  <img src={img} alt="" />
                  <div className="p-4">
                    <h3 className="text-xl font-roboto text-d-color font-semibold mb-1">
                      {title}
                    </h3>
                    <p className="font-normal text-sm md:text-base">
                      {description}
                    </p>

                    <div className="flex gap-2 items-center mt-5">
                      {/* Render Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            className="text-white bg-[#E8A641] w-4 h-4 text-base p-1 rounded-sm flex justify-center items-center text-center"
                            key={index}
                          >
                            &#9733;
                          </span> // Unicode Star
                        ))}
                      </div>
                      {/* <span className="text-sm font-bold font-lexend text-d-color ml-2">{`${rating} <span>(${views})</span>`}</span> */}
                      {
                        <div className="flex flex-col md:flex-row items-center gap-1">
                          <span className=" flex text-d-color font-lexend font-bold">
                            {rating}
                          </span>
                          <span className="text-sm">({views})</span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
            <div className="mb-10">
            <Button label="Show more" className="py-2 font-normal md:py-2 rounded-full" />
            </div>
        </div>
        <div>
          <img className="md:float-right object-cover w-full" src="/img/map.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default All;
