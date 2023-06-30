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
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/GreatPlaceToWork.png"
            alt="Great place to work"
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/CanadaBestManagedCompanies.png"
            alt="Canada best managed companies"
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/Hired2020EmployerBrandTopTen.jpg"
            alt="Hired 2020 Toronto employer brand top ten"
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/WaterstoneMostAdmiredCeo.png"
            alt="Waterstone Canada's most admired ceo"
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="basis-1/2 md:basis-1/6 pr-3">
          <Image
            src="/GreatPlaceToWorkForWomen.png"
            alt="Great place to work for women"
            width={80}
            height={80}
            unoptimized
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TopEmployer;
