import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 w-full p-5 md:flex">
      <div className="mt-10 mb-10 md:basis-1/2">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold uppercase mb-5">
          About Us
        </h2>
        <p className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold md:font-bold leading-8 mb-5">
          Flipp connects tens of millions of shoppers to retailers every week
        </p>
        <p className="text-white leading-7 md:text-lg font-medium">
          Founded in 2007, Flipp is a technology platform that is reinventing
          the way people plan their weekly shopping trip.
        </p>
      </div>
      <div className="md:basis-1/2">
        <Image
          src="/CorporationAboutUsHeroImage.jpg"
          alt="About us"
          width={1000}
          height={1000}
          className="object-contain w-full h-full translate-y-12"
        />
      </div>
    </section>
  );
};

export default Hero;
