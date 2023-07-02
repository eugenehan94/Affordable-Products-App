import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 w-full p-5 md:flex gap-x-2">
      <div className="md:basis-1/2">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase mb-5">
          Platform
        </h2>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold md:font-bold leading-8 mb-5">
          Flipp helps reinvent the merchandising ecosystem to move from digital
          advertising shoppers avoid to Experiences shoppers actively seek out.
        </h2>
        <p className="text-white leading-7 md:text-lg font-medium mb-5">
          The Flipp Shopper Consideration Platform is an end-to-end platform
          that allows retailers, brands, and publishers to deliver shopper
          preferred digital shopping experiences to millions across North
          America.
        </p>
        <button className="bg-white text-base md:text-lg font-medium text-sky-700 px-6 py-2 rounded-full">
          Contact Us
        </button>
      </div>
      <div className="md:basis-1/2">
        <Image
          src="/CorporationPlatformsHeroImage.jpg"
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
