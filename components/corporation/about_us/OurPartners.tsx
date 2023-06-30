import Image from "next/image";

const OurPartners = () => {
  return (
    <section className="p-5 flex flex-col lg:flex-row gap-x-3">
      <div className="lg:basis-1/2">
        <h2 className="text-lg md:text-xl lg:text-2xl uppercase text-sky-800 font-bold mb-5">
          Our Partners
        </h2>
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold mb-5">
          Flipp digitally connects North America's best retailers and CPG
          manufacturers to millions of high intent shoppers each week. We are
          here to help our partners redefine how shoppers discover products and
          make purchasing decisions in a digitally driven world.
        </h2>
        <p className="text-base md:text-lg font-semibold leading-7 mb-10">
          We help our retail partners connect with consumers to share savings
          and deals content while also providing analytics and insights to
          better understand consumer shopping behavior.
        </p>
        <button className="bg-sky-700 text-white font-medium px-8 py-3 rounded-full mb-5 md:text-lg">
          Learn more about our partners
        </button>
      </div>
      <div className="basis-1/2">
        <Image
          src="/CorporationAboutUsOurPartners.png"
          alt="Our partners"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
    </section>
  );
};

export default OurPartners;
