import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 p-6 lg:p-9 flex flex-col md:flex-row gap-x-5">
      <div className="basis-1/2">
        <h2 className="text-2xl lg:text-5xl text-white font-bold mt-10 mb-5 lg:leading-tight">
          Flipp connects tens of millions of shoppers to retailers every week
        </h2>
        <p className="text-white font-medium lg:text-xl">
          Millions of shoppers seek out Flipp’s digital shopping experience
          every week. The Flipp Shopper Consideration Platform gives retailers,
          brands, and publishers the ability to curate and distribute rich,
          local shopping content to millions of shoppers every week.
        </p>
      </div>
      <div className="w-full h-full basis-1/2">
        {/* https://stackoverflow.com/questions/73673403/lower-quality-images-in-next-js-image-vs-normal-img-tag 
    This explains the use of "unoptimized" in the Image to prevent blurry images*/}
        <Image
          src="/CorporationHomeHeroImage.jpg"
          alt="Hero"
          width={80}
          height={80}
          style={{ width: "100%", height: "100%" }}
          unoptimized
          className="translate-y-16 md:translate-y-0"
        />
      </div>
    </section>
  );
};

export default Hero;
