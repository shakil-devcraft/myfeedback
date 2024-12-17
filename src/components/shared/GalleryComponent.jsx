import Button from "./Button/Button";
import Container from "./Container/Container";

const GalleryComponent = () => {
  const images = [
    { id: 1, img: "/img/gallerys (1).png", alt: "Big Image", type: "big" },
    { id: 2, img: "/img/gallerys (2).png", alt: "Small Image 1", type: "small" },
    { id: 3, img: "/img/gallerys (3).png", alt: "Small Image 2", type: "small" },
    { id: 4, img: "/img/gallerys (4).png", alt: "Small Image 3", type: "small" },
    { id: 5, img: "/img/gallerys (5).png", alt: "Small Image 4", type: "small" },
  ];

  return (
    <section>
      <Container>
        <div className="grid grid-cols-8 gap-4 p-4 mt-24">
          {/* Big Image - grid-cols-4 */}
          <div className="col-span-4 relative">
            <img
              src={images[0]?.img}
              alt=""
              className="w-full h-[552px] rounded-l-[22px] object-cover"
            />
            {/* Button */}
            <Button label="View all photos (7)" leftIcon={<i className='bx bxs-image' ></i>} className="absolute bottom-6 left-6 rounded-full bg-white text-d-color py-2 md:py-2 font-roboto text-base px-4" />
          </div>

          {/* Smaller Images - grid-cols-4 */}
          <div className="col-span-4 grid grid-cols-2 gap-4">
            {images.slice(1).map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="w-full h-[266px] rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GalleryComponent;
