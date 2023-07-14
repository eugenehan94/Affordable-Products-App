import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 w-full p-5 md:flex gap-x-2">
      <div className="hidden md:flex md:basis-1/2">
        <h2 className="text-white text-2xl lg:text-4xl font-bold">Newsroom</h2>
      </div>
      <div className="md:basis-1/2">
        <h2 className="md:hidden text-white text-2xl font-bold translate-y-5">Newsroom</h2>
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
