import Container from "./Container/Container";
import Rating from "./Rating";
import { ratingsData } from "../../api";

const RatingSec = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 mb-4">
          <div className="flex gap-4">
            <img className="w-12 h-12" src="/img/over-rating.png" alt="" />
            <div>
              <h2 className="text-d-color font-roboto font-bold text-3xl">
                Overall rating
              </h2>
              <p className="text-l-color font-normal text-base mt-1 mb-4">834 Reviews</p>
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
            </div>
          </div>
          <div className="md:col-span-2">
            {ratingsData.map((data, index) => (
              <Rating
                key={index}
                rating={data.rating}
                percentage={data.percentage}
              />
            ))}
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default RatingSec;
