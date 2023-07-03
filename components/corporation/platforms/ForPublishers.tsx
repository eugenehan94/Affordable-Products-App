import Image from "next/image";

const ForPublishers = () => {
  return (
    <section className="p-5 my-24 flex flex-col lg:flex-row gap-x-5">
      <div className="basis-1/2">
        <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
          For publishers
        </h2>
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold mb-5">
          Participate in the analog to digital transformation of retail
        </h2>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          Flipp’s Native Experience Platform offers a suite of simple to
          integrate tools that allow media partners to enrich their properties
          through immersive, local shopping experiences that shoppers love. This
          means higher revenue, low bounce rates and higher user satisfaction.
        </p>
        <p className="my-5 font-semibold leading-7 md:text-lg">
          To request participation in our platform please{" "}
          <span>click here</span>
        </p>
      </div>
      <div className="basis-1/2">
        <Image
          src="/CorporationPlatformsForPublishersImage.jpg"
          alt="For publishers"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
    </section>
  );
};

export default ForPublishers;
