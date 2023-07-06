import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 w-full p-5 md:flex gap-x-2">
      <div className="md:basis-1/2">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase mb-5">
          Our Partners
        </h2>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold md:font-bold leading-8 mb-5">
          Learn how to transform your merchandising promotion strategy with
          Flipp today.
        </h2>
        <button className="bg-white text-base md:text-lg font-medium text-sky-700 px-6 py-2 rounded-full">
          Become a Partner
        </button>
      </div>
      <div className="md:basis-1/2">
        <Image
          src="/CorporationPartnersHeroImage.jpg"
          alt="Hero"
          width={80}
          height={80}
          unoptimized
          style={{ width: "100%", height: "100%" }}
          className="translate-y-12 md:translate-y-0"
        />
      </div>
    </section>
  );
};

export default Hero;
