import Image from "next/image";

const cpgPartnersData = [
  {
    name: "P&G",
    imageLink: "/P&GLogo.png",
  },
  {
    name: "Campbells",
    imageLink: "/CampbellsLogo.png",
  },
  {
    name: "Mondelez",
    imageLink: "/MondelezLogo.png",
  },
  {
    name: "Kelloggs",
    imageLink: "/KelloggsLogo.png",
  },
  {
    name: "Johnson And Johnson",
    imageLink: "/JohnsonAndJohnsonLogo.png",
  },
  {
    name: "Danone",
    imageLink: "/DanoneLogo.png",
  },
  {
    name: "Coca Cola",
    imageLink: "/CocaColaLogo.png",
  },
  {
    name: "Nestle",
    imageLink: "/NestleLogo.png",
  },
];

const OurCpgPartners = () => {
  return (
    <section className="p-5 my-24">
      <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
        OUR CPG PARTNERS
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {cpgPartnersData.map((retail) => (
          <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
            <Image
              src={retail.imageLink}
              alt={retail.name}
              width={1000}
              height={1000}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCpgPartners;
