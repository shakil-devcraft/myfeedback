import Container from "../../components/shared/Container/Container";
import SliderComponent from "../../components/slides/Slider";
import LatestTrends from "./LatestTrends";
import MyFeedBack from "./MyFeedBack";

const Restaurants = () => {
  return (
    <section>
      <div className="py-14">
        <Container>
          <SliderComponent />
        </Container>
      </div>
      <LatestTrends />
      <MyFeedBack />
    </section>
  );
};

export default Restaurants;
