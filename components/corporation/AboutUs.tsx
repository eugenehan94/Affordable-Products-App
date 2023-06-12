import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="my-20 px-14 flex flex-col lg:flex-row items-stretch justify-stretch">
      <div className="basis-1/2">
        {/* https://stackoverflow.com/questions/73673403/lower-quality-images-in-next-js-image-vs-normal-img-tag 
    This explains the use of "unoptimized" in the Image to prevent blurry images*/}
        <Image
          src="/CorporationAboutUsImage.jpg"
          alt="About Us"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
        />
      </div>
      <div className="mt-8 px-8 lg:px-10 basis-1/2">
        <h2 className="uppercase text-sky-800 text-lg lg:text-2xl font-bold mb-5">
          About Us
        </h2>
        <p className="mb-5 font-medium lg:text-lg leading-8 lg:leading-10">
          Founded in 2007, Flipp is a technology platform that is reinventing
          the way people plan their weekly shopping trip. The largest retailers,
          brands, and digital publishers in North America use the Flipp platform
          to curate and distribute savings content to millions of highly-engaged
          shoppers every day.
        </p>
        <p className="mb-10 font-medium lg:text-lg leading-8 lg:leading-10">
          Millions of shoppers across North America use Flipp’s digital
          experiences to decide what to buy and where to buy.
        </p>
        <button className="bg-sky-700 text-white font-medium px-8 py-3 rounded-full">
          Learn more about us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
