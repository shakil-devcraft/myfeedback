import Button from "../../components/shared/Button/Button";


const All = () => {

  return (
    <section className="px-4 md:pl-6 lg:pl-20">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-6">
        <div>
          <h4 className="font-roboto text-d-color font-semibold mb-3">Home / All restaurants</h4>
          <div className="flex justify-start items-center gap-6">
            <h1 className="font-extrabold font-lexend text-3xl text-d-color">best restaurants in singapore</h1>
            <Button label="Sort" leftIcon={<i className='bx bx-sort-down'></i>} className="font-medium text-l-color text-base bg-transparent rounded-full border-2 py-2 md:py-1 px-4" />
          </div>
        </div>
        <div>
          <img className="float-right" src="/img/map.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default All;
