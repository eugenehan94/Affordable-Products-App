import Image from "next/image";

const OurRetailPartners = () => {
  return (
    <section className="p-5 my-24">
      <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
        OUR RETAIL PARTNERS
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="basis-1/2 md:basis-1/4 relative p-5 lg:p-12">
          <Image
            src="/WalmartLogo.png"
            alt="Walmart"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/HomeDepotV2Logo.png"
            alt="Home Depot"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/LowesLogo.png"
            alt="Lowes"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12" >
          <Image
            src="/BestBuyLogo.png"
            alt="Best Buy"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/PetsmartLogo.png"
            alt="Petsmart"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/WalgreensLogo.png"
            alt="Walgreens"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/LoblawsLogo.png"
            alt="Loblaws"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/KrogerNoBorderLogo.png"
            alt="Kroger"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/FamilyDollarLogoV2.jpeg"
            alt="Family Dollar"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/CanadianTireLogo.png"
            alt="Canadian Tire"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/DollarTreeLogo.png"
            alt="Dollar Tree"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/DicksLogo.png"
            alt="Dicks"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/CVSPharmacyWithLogo.png"
            alt="CVS Pharmacy"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/IkeaLogo.png"
            alt="Ikea"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/MeijerLogo.png"
            alt="Meijer "
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
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
