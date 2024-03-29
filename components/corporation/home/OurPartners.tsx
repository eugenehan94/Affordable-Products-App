import Image from "next/image";
import Link from "next/link";

const OurPartners = () => {
  return (
    <section className="my-20 px-14 flex flex-col lg:flex-row items-stretch justify-stretch">
      <div className="basis-1/2">
        <Image
          src="/CorporationOurPartnersImage.jpg"
          alt="Our platform"
          className="object-contain w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-8 px-8 lg:px-10 basis-1/2">
        <h1 className="uppercase text-sky-800 text-lg lg:text-2xl font-bold mb-5">
          Our Partners
        </h1>
        <p className="mb-5 font-medium lg:text-lg leading-8 lg:leading-10">
          Flipp technology is used by over 90% of North America’s largest
          retailers. Flipp’s Platform is also used by some of the world’s most
          recognizable CPGs and digital publishers
        </p>
        <button className="bg-sky-700 text-white font-medium px-8 py-3 rounded-full">
          <Link href="/corporation/partners">
            Learn more about our partners
          </Link>
        </button>
      </div>
    </section>
  );
};

export default OurPartners;
