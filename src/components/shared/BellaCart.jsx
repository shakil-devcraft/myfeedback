import { bellaSimpleCart } from "../../api";
import Button from "./Button/Button";
import Container from "./Container/Container";

const BellaCart = () => {
    return (
        <section>
            <Container>
                <div className="lg:w-[1055px]">
                    {
                        bellaSimpleCart?.map(({img, user, description, date, location}, index) => (
                            <div className="flex gap-4 p-4 mb-6 bg-[#F8F8F8] rounded-lg" key={index}>
                                <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                                    {
                                        img ? <img src={img} alt="" /> : <i className=' text-xl bx bx-user' ></i>
                                    }
                                </div>

                                <div>
                                    <h2>{user}</h2>
                                    <span>{location}</span>

                                    <div>
                                        {/* Rating & Date */}
                                        <div className="flex items-center gap-2 my-3">
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
                                            <span className="text-gray-400 text-sm">{date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className=" flex justify-center items-center my-10">
                    <Button label="Show more reviews" className="py-2 font-normal md:py-2 rounded-full" />
                </div>
            </Container>
        </section>
    );
};

export default BellaCart;