import Container from "../../components/shared/Container/Container";

const MyFeedBack = () => {
  return (
    <section className="bg-[#F2F2F2]">
      <Container>
        <div className="w-full md:w-[1020px] flex flex-col md:flex-row justify-center gap-5 lg:gap-6 mx-auto">
            <div>
                <h1 className="font-extrabold font-lexend text-xl lg:text-2xl">MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className="font-roboto text-sm text-l-color lg:text-base">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            </div>
            <div></div>
        </div>
      </Container>
    </section>
  );
};

export default MyFeedBack;
