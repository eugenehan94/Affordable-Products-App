// https://stackoverflow.com/questions/73673403/lower-quality-images-in-next-js-image-vs-normal-img-tag
// This explains the use of "unoptimized" in the Image to prevent blurry images
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24">
      <div className="p-6 lg:p-12 flex flex-col md:flex-row gap-x-5">
        <div className="basis-1/2">
          <h2 className="text-2xl lg:text-5xl text-white font-bold mt-10 lg:mt-0 mb-5 lg:leading-tight">
            Flipp connects tens of millions of shoppers to retailers every week
          </h2>
          <p className="text-white font-medium lg:text-xl">
            Millions of shoppers seek out Flipp’s digital shopping experience
            every week. The Flipp Shopper Consideration Platform gives
            retailers, brands, and publishers the ability to curate and
            distribute rich, local shopping content to millions of shoppers
            every week.
          </p>
        </div>
        <div className="w-full h-full basis-1/2">
          <Image
            src="/CorporationHomeHeroImage.jpg"
            alt="Hero"
            className="object-contain w-full h-full translate-y-16 md:translate-y-0"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
