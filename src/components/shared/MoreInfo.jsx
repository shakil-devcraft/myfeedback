import Container from "./Container/Container";

const MoreInfo = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-20 gap-4 sm:gap-6">
                    <div>
                        <h2 className="font-semibold text-d-color text-3xl">More informations</h2>
                        <div className="mt-6 mb-4 flex flex-col gap-4">
                            <div className="flex gap-2 items-center text-d-color text-lg font-normal font-roboto">
                                <i className='bx bx-knife' ></i>
                                <p>See the menu</p>
                            </div>
                            <div className="flex gap-2 items-center text-d-color text-lg font-normal font-roboto">
                                <i className='bx bxs-phone-call' ></i>
                                <p>+847 87 37 29 01</p>
                            </div>
                            <div className="flex gap-2 items-center text-d-color text-lg font-normal font-roboto">
                                <i className='bx bxs-edit-location' ></i>
                                <p>Singapour, Bishan</p>
                            </div>
                            <div className="flex gap-2 items-center text-d-color text-lg font-normal font-roboto">
                                <i className='bx bxs-time' ></i>
                                <p>7j/7, 08:00 - 22:00</p>
                            </div>
                            <div className="flex gap-2 items-center text-d-color text-lg font-normal font-roboto">
                                <i className='bx bxs-chalkboard'></i>
                                <p>www.bellaitalia.com</p>
                            </div>
                        </div>
                        <div className="flex gap-2 text-d-color text-4xl">
                            <i className='bx bxl-facebook-circle' ></i>
                            <i className='bx bxl-instagram-alt' ></i>
                            <i className='bx bxl-tiktok' ></i>
                            <i className='bx bxl-whatsapp' ></i>
                        </div>
                    </div>
                    <div>
                        <img src="/img/map2.png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MoreInfo;