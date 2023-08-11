import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-24 bg-teal-400">
      <div className="p-5 pt-12 md:flex md:p-8 md:pt-14">
        <div className="md:basis-1/2 md:p-1">
          <div className="mb-5">
            <h2 className="uppercase text-violet-950 text-lg md:text-xl lg:text-2xl font-bold">
              OUR TEAMS
            </h2>
          </div>
          <div className="mb-5">
            <h2 className="text-violet-700 text-2xl md:text-3xl lg:text-4xl font-bold lg:leading-snug">
              Do you have what it takes to create the ultimate consumer
              experience? Join our team!
            </h2>
          </div>
          <div>
            <button className="bg-white px-7 py-2.5 md:text-lg rounded-full text-violet-600 font-medium">
              <Link href="/corporation/job_openings">View Job Openings</Link>
            </button>
          </div>
        </div>
        <div className="md:basis-1/2 relative">
          <Image
            src="/CorporationTeamsHeroImage.jpg"
            alt="Hero"
            width={500}
            height={500}
            className="translate-y-10 md:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
