import Container from "../../components/shared/Container/Container";
import TestimonialSlider from "../../components/slides/TestimonialSlider";

const RecentsActivities = () => {
  return (
    <section>
      <Container>
        <div className="py-10">
          <h2 className="font-extrabold text-d-color font-lexend text-xl lg:text-3xl mb-5">
          Recents avtivities
          </h2>
          <TestimonialSlider />
        </div>
      </Container>
    </section>
  );
};

export default RecentsActivities;
