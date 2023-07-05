import Image from "next/image";

const OurCpgPartners = () => {
  return (
    <section className="p-5 my-24">
      <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
        OUR CPG PARTNERS
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="basis-1/2 md:basis-1/4 relative p-5 lg:p-12">
          <Image
            src="/P&GLogo.png"
            alt="P&G"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/CampbellsLogo.png"
            alt="Campbells"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
          <Image
            src="/MondelezLogo.png"
            alt="Mondelez"
            width={80}
            height={80}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 p-5 lg:p-12">
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
      </div>
    </section>
  );
};

export default OurCpgPartners;
