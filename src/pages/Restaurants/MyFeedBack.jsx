import Button from "../../components/shared/Button/Button";
import Container from "../../components/shared/Container/Container";

const MyFeedBack = () => {
  return (
    <section className="bg-[#F2F2F2] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 lg:gap-6 py-6 lg:w-[1020px] mx-auto">
            <div className="md:w-[400px]">
                <h1 className="font-extrabold text-d-color font-lexend text-xl lg:text-2xl mb-5">MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className="font-roboto text-sm text-l-color lg:text-base mb-10">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <Button label="MyFeedback for business" className="bg-d-color text-white px-4 py-2 md:py-2 font-roboto font-normal rounded-full" />
            </div>
            <div className="flex mx-auto justify-center items-center">
                <img className="bg-cover object-cover" src="/img/myfeedback-r.png" alt="" />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default MyFeedBack;
