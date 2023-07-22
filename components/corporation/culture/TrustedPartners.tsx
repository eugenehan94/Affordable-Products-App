import Image from "next/image";

const trustedPartnersData = [
  {
    imageSrc: "/WaterstoneMostAdmired.png",
    imageAlt: "Waterstone most admired",
  },
  {
    imageSrc: "/GreatPlaceToWork.png",
    imageAlt: "Great place to work",
  },
  {
    imageSrc: "/CanadaBestManagedCompanies.png",
    imageAlt: "Canada best managed companies",
  },
  {
    imageSrc: "/Hired2020EmployerBrandTopTen.jpg",
    imageAlt: "Hired 2020 Toronto employer brand top ten",
  },
  {
    imageSrc: "/WaterstoneMostAdmiredCeo.png",
    imageAlt: "Waterstone Canada's most admired ceo",
  },
  {
    imageSrc: "/GreatPlaceToWorkForWomen.png",
    imageAlt: "Great place to work for women",
  },
];

const TrustedPartners = () => {
  return (
    <section className="bg-teal-100/30 p-5 mt-16">
      <h2 className="uppercase text-violet-500 text-lg lg:text-2xl font-bold leading-5 mb-10">
        WE’RE NOT THE ONLY ONES WHO THINK OUR CULTURE IS GREAT!
      </h2>
      <div className="flex flex-wrap gap-y-10">
        {trustedPartnersData.map((partner) => (
          <div className="basis-1/2 md:basis-1/6 pr-3">
            <Image
              src={partner.imageSrc}
              alt={partner.imageAlt}
              width={180}
              height={180}
              className="w-40 md:w-20 lg:w-32"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
