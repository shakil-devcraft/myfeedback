import Container from "../../components/shared/Container/Container";
import SliderComponent from "../../components/slides/Slider";
import LatestTrends from "./LatestTrends";

const Restaurants = () => {
  return (
    <section>
      <div className="py-14">
        <Container>
          <SliderComponent />
        </Container>
      </div>
      <LatestTrends />
    </section>
  );
};

export default Restaurants;
