import { latestTrends } from "../../api";
import Button from "../../components/shared/Button/Button";
import Container from "../../components/shared/Container/Container";
import SimpleCard from "../../components/shared/SimpleCard";

const LatestTrends = () => {
  return (
    <section>
      <div className="pb-10">
        <Container>
          <h2 className="font-extrabold text-d-color font-lexend text-xl lg:text-3xl mb-5">
            The latest trends
          </h2>

          {/* data load */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {latestTrends?.map((item, index) => (
              <SimpleCard
                key={index}
                image={item?.image}
                title={item?.title}
                description={item?.description}
                rating={item?.rating}
                views={item?.views}
              />
            ))}
          </div>

          {/* discover */}
          <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <h3 className="font-normal text-d-color font-lexend text-xl">Discover more cool restaurants</h3>
            <Button label="Show more" className="font-normal text-white font-roboto text-base rounded-full py-2 md:py-2 md:text-lg" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default LatestTrends;
