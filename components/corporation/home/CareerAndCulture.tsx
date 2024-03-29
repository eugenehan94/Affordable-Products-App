import Image from "next/image";
import Link from "next/link";

const CareerAndCulture = () => {
  return (
    <section className="my-20 px-14 flex flex-col lg:flex-row-reverse items-stretch justify-stretch">
      <div className="basis-1/2">
        <Image
          src="/CorporationCareerAndCultureImage.jpg"
          alt="Our platform"
          className="object-contain w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-8 px-8 lg:px-10 basis-1/2">
        <h1 className="uppercase text-sky-800 text-lg lg:text-2xl font-bold mb-5">
          Careers & Culture
        </h1>
        <p className="mb-5 font-medium lg:text-lg leading-8 lg:leading-10">
          You won’t find a team more tight knit than ours and that’s because we
          are a team who live and breathe our cultural values and principles. We
          are proud to say that we have been successful in maintaining our
          one-of-a-kind culture, no matter how big our team grows!
        </p>
        <button className="bg-sky-700 text-white font-medium px-8 py-3 rounded-full">
          <Link href="/corporation/culture">Learn more about our culture</Link>
        </button>
      </div>
    </section>
  );
};

export default CareerAndCulture;
