import Container from "../../components/shared/Container/Container";
import MoreInfo from "../../components/shared/MoreInfo";
import backgroundImage from "/img/bella-bg.png";

const BellaItalia = () => {
  return (
    <section>
      <Container>
        <div className="pt-10">
          <h4 className="font-roboto text-d-color font-semibold mb-3">
            Home / BellaItalia
          </h4>
        </div>
      </Container>
      <div
        className="relative py-10 w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 16, 16, 0.77) 12%, rgba(16, 16, 16, 0.515625) 45.88%, rgba(16, 16, 16, 0) 94.72%), url(${backgroundImage})`,
        }}
      >
        <Container>
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-start items-start h-full text-white md:w-[400px] lg:w-[460px]">
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-lexend font-bold mb-6">
              Bella italia
            </h1>

            {/* Render Stars */}
            <div className="flex justify-start items-center gap-3 pl-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    className="text-white bg-[#E8A641] w-4 h-4 text-base p-1 rounded-sm flex justify-center items-center "
                    key={index}
                  >
                    &#9733;
                  </span> // Unicode Star
                ))}
              </div>
              {/* <span className="text-sm font-bold font-lexend text-d-color ml-2">{`${rating} <span>(${views})</span>`}</span> */}
              {
                <div className="flex items-center gap-1 font-roboto font-normal">
                  <span className="text-white font-lexend font-bold">4.5</span>
                  <span className="text-sm">(654 reviews)</span>
                </div>
              }
            </div>

            <p className="font-normal font-roboto text-white mt-3 mb-10">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
              <br />
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>

            <div className="flex flex-col gap-4 mb-7">
              <div className="flex items-center gap-2">
                <i className=" text-xl bx bxs-edit-location"></i>
                <p className="font-normal font-roboto text-white">
                  Singapour, Bishan-Ang Mo Kio Park
                </p>
              </div>
              <div className="flex items-center gap-2">
                <i className=" text-lg bx bxs-time-five"></i>
                <p className="font-normal font-roboto text-white">
                7j/7, 08:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <MoreInfo />
    </section>
  );
};

export default BellaItalia;
