import Image from "next/image";

const ForBrands = () => {
  return (
    <section className="p-5 my-24 flex flex-col lg:flex-row-reverse gap-x-5">
      <div className="basis-1/2">
        <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
          For brands
        </h2>
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold mb-5">
          Are you moving shoppers from brand awareness to conversion?
        </h2>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          The Flipp Shopper Consideration Platform helps brands fill in the
          “missing middle” in their path-to-purchase strategies. Our technology
          fuses multi-retailer, local savings & deal content with brand benefit
          assets into experiences that shoppers prefer.
        </p>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          Flipp’s ability to distribute brand shopping experiences to millions
          of shoppers allows brands to drive trade in, trade up, and trade
          across at scale.
        </p>
      </div>
      <div className="basis-1/2">
        <Image
          src="/CorporationPlatformsForBrandsImage.jpg"
          alt="For brands"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
    </section>
  );
};

export default ForBrands;
