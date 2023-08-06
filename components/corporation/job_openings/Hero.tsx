import Image from "next/image";
const Hero = () => {
  return (
    <section className="mt-24 bg-pink-400">
      <div className="p-5 pt-12 md:flex md:p-8 md:pt-14">
        <div className="md:basis-1/2 md:p-1">
          <div className="mb-5">
            <h2 className="uppercase text-indigo-900 text-lg md:text-xl lg:text-2xl font-bold">
              JOB OPENINGS
            </h2>
          </div>
          <div className="mb-5">
            <h2 className="text-indigo-900 text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-snug">
              Join our team. <br/>We’re hiring!
            </h2>
          </div>
        </div>
        <div className="md:basis-1/2 relative">
          <Image
            src="/CorporationJobOpeningsHeroImage.jpg"
            alt="Hero"
            width={1000}
            height={1000}
            className="translate-y-10 md:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
