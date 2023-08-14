import Image from "next/image";

const TopEmployer = () => {
  return (
    <section className="p-5 mt-16">
      <h2 className="text-sky-800 text-lg uppercase font-bold mb-10 lg:text-2xl">
        TOP TORONTO EMPLOYER BY
      </h2>
      <div className="flex flex-wrap gap-y-10">
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/WaterstoneMostAdmired.png"
            alt="Waterstone most admired"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/GreatPlaceToWork.png"
            alt="Great place to work"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/CanadaBestManagedCompanies.png"
            alt="Canada best managed companies"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/Hired2020EmployerBrandTopTen.jpg"
            alt="Hired 2020 Toronto employer brand top ten"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/WaterstoneMostAdmiredCeo.png"
            alt="Waterstone Canada's most admired ceo"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/GreatPlaceToWorkForWomen.png"
            alt="Great place to work for women"
            className="w-60 md:w-24 lg:w-32"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default TopEmployer;
