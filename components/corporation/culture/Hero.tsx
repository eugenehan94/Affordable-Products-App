import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-24 bg-violet-500 px-5 pt-14 md:flex md:py-20 md:gap-x-5 lg:py-6">
      <div className="md:basis-1/2">
        <h2 className="uppercase text-yellow-500 text-lg md:text-xl lg:text-2xl font-bold">
          Our Culture
        </h2>
        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mt-3 mb-5">
          Flipp is a team made up of leaders, motivators, hustlers, coaches,
          creators, and colleagues.
        </h2>
        <button className="bg-white rounded-full px-6 py-2 text-violet-500 font-medium md:text-lg">
          <Link href="/corporation/job_openings">View Job Openings</Link>
        </button>
      </div>
      <div className="md:basis-1/2">
        <Image
          src="/CorporationCultureHeroImage.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="h-full w-full translate-y-10 md:translate-y-0 lg:translate-y-14"
        />
      </div>
    </section>
  );
};

export default Hero;
