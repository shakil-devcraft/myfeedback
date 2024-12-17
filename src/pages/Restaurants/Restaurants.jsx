import Container from "../../components/shared/Container/Container";
import SliderComponent from "../../components/slides/Slider";
import LatestTrends from "./LatestTrends";
import MyFeedBack from "./MyFeedBack";
import RecentsActivities from "./RecentsActivities";

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
      <RecentsActivities />
    </section>
  );
};

export default Restaurants;
