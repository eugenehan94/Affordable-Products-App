import Image from "next/image";

const OurPlatform = () => {
  return (
    <section className="my-20 px-14 flex flex-col lg:flex-row-reverse items-stretch justify-stretch">
      <div className="basis-1/2">
        <Image
          src="/CorporationOurPlatformImage.jpg"
          alt="Our platform"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
      <div className="mt-8 px-8 lg:px-10 basis-1/2">
        <h1 className="uppercase text-sky-800 text-lg lg:text-2xl font-bold mb-5">Our Platform</h1>
        <p className="mb-5 font-medium lg:text-lg leading-8 lg:leading-10">
          The Flipp Shopper Consideration Platform is an end-to-end platform
          that allows retailers and brands to win the consideration phase of the
          shopping journey and drive trips, trade, and baskets. The platform
          allows publishers to integrate rich, consumer-preferred content that
          drives superior RPM and user satisfaction.
        </p>
        <p className="mb-10 font-medium lg:text-lg leading-8 lg:leading-10">
          The Flipp Shopper Consideration Platform enables the seamless curation
          and distribution of rich digital shopping experiences to nearly every
          North American household, every week.
        </p>
        <button className="bg-sky-700 text-white font-medium px-8 py-3 rounded-full">
          Learn more about our platform
        </button>
      </div>
    </section>
  );
};

export default OurPlatform;
