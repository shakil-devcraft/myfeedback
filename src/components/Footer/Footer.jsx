import Container from "../shared/Container/Container";

const Footer = () => {
    return (
        <section className="border-t border-[#DCDCDC] mt-4">
            <Container>
                <div className="flex flex-col md:flex-row justify-evenly gap-5 md:gap-6 pt-8">
                    <div>
                        <h2 className="text-xl font-extrabold text-d-color mb-4">About</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="font-normal text-sm text-l-color">About MyFeedback</li>
                            <li className="font-normal text-sm text-l-color">Investor Relations</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold text-d-color mb-4">MyFeedback</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="font-normal text-sm text-l-color">MyFeedback for business</li>
                            <li className="font-normal text-sm text-l-color">Collections</li>
                            <li className="font-normal text-sm text-l-color">Talk</li>
                            <li className="font-normal text-sm text-l-color">Events</li>
                            <li className="font-normal text-sm text-l-color">MyFeedback blog</li>
                            <li className="font-normal text-sm text-l-color">Support</li>
                            <li className="font-normal text-sm text-l-color">Developers</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-xl font-extrabold text-d-color mb-4">Languages</h2>
                            <ul className="flex flex-col gap-2">
                                <li className=" flex justify-start items-center gap-2 font-normal text-sm text-l-color">English <i className='bx bxs-chevron-down'></i></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-extrabold text-d-color mb-4">Countries</h2>
                            <ul className="flex flex-col gap-2">
                                <li className=" flex justify-start items-center gap-2 font-normal text-sm text-l-color">Singapour <i className='bx bxs-chevron-down'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center py-10">
                    <span className="font-roboto text-d-color font-semibold text-xs md:text-sm text-center">Copyright &copy;Septembre 2023 myfeedback, designed by scott</span>
                </div>
            </Container>
        </section>
    );
};

export default Footer;