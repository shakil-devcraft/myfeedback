import Button from "./Button/Button";
import Container from "./Container/Container";

const BellaFilter = () => {
    return (
        <section>
            <Container>
                <div className="py-10">
                    <div className="flex gap-4">
                        <Button
                            label="Filter"
                            leftIcon={<i className='bx bx-filter' ></i>}
                            className="font-medium text-l-color text-base bg-transparent rounded-full border-2 py-2 md:py-1 px-4 hover:border-d-color hover:text-d-color transition"
                        />
                        <Button
                            label="Sort"
                            leftIcon={<i className="bx bx-sort-down"></i>}
                            className="font-medium text-l-color text-base bg-transparent rounded-full border-2 py-2 md:py-1 px-4 hover:border-d-color hover:text-d-color transition"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BellaFilter;