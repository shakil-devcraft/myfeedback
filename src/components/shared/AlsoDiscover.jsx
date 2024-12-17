import { discoverData } from '../../api';
import Container from './Container/Container';
import SimpleCard from './SimpleCard';

const AlsoDiscover = () => {
    return (
        <section>
            <Container>
                <div>
                    <h2 className="font-semibold text-d-color text-2xl lg:text-3xl">Also discover...</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-16'>
                        {
                            discoverData?.map((item, index) => (
                                <SimpleCard 
                                key={index}
                                image={item?.image}
                                title={item?.title}
                                description={item?.description}
                                rating={item?.rating}
                                views={item?.views}
                                />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AlsoDiscover;