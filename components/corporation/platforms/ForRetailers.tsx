import Image from "next/image";

const ForRetailers = () => {
  return (
    <section className="p-5 my-24 flex flex-col lg:flex-row gap-x-5">
      <div className="basis-1/2">
        <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
          For Retailers
        </h2>
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold mb-5">
          The Flipp Shopper Consideration Platform offers technology to help
          retailers win the consideration phase of the shopping journey.
        </h2>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          Flipp allows retailers to deliver shopping experiences to millions of
          households across North America each week.
        </p>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          Flipp’s technology drives down the costs of digital savings content
          curation and distribution to nearly zero. We believe retailers should
          only pay when a shopper engages. This means better ROI, more trips to
          store, more trade investment, and higher baskets.
        </p>
      </div>
      <div className="basis-1/2">
        <Image
          src="/CorporationPlatformsForRetailersImage.jpg"
          alt="For retailers"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
    </section>
  );
};

export default ForRetailers;
