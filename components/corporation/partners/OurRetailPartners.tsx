import Image from "next/image";

const retailPartnersData = [
  {
    name: "Walmart",
    imageLink: "/WalmartLogo.png",
  },
  {
    name: "Home Depot",
    imageLink: "/HomeDepotV2Logo.png",
  },
  {
    name: "Lowes",
    imageLink: "/LowesLogo.png",
  },
  {
    name: "Best Buy",
    imageLink: "/BestBuyLogo.png",
  },
  {
    name: "Petsmart",
    imageLink: "/PetsmartLogo.png",
  },
  {
    name: "Walgreens",
    imageLink: "/WalgreensLogo.png",
  },
  {
    name: "Loblaws",
    imageLink: "/LoblawsLogo.png",
  },
  {
    name: "Kroger",
    imageLink: "/KrogerNoBorderLogo.png",
  },
  {
    name: "Family Dollar",
    imageLink: "/FamilyDollarLogoV2.jpeg",
  },
  {
    name: "Canadian Tire",
    imageLink: "/CanadianTireLogo.png",
  },
  {
    name: "Dollar Tree",
    imageLink: "/DollarTreeLogo.png",
  },
  {
    name: "Dicks",
    imageLink: "/DicksLogo.png",
  },
  {
    name: "CVS Pharmacy",
    imageLink: "/CVSPharmacyWithLogo.png",
  },
  {
    name: "Ikea",
    imageLink: "/IkeaLogo.png",
  },
  {
    name: "Meijer",
    imageLink: "/MeijerLogo.png",
  },
];

const OurRetailPartners = () => {
  return (
    <section className="p-5 my-24">
      <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
        OUR RETAIL PARTNERS
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {retailPartnersData.map((retail) => (
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
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold leading-5">
            and 2000+ more!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurRetailPartners;
