import Image from "next/image";
import Link from "next/link";

const OurCulture = () => {
  return (
    <section className="p-5 lg:flex lg:flex-row lg:gap-x-5">
      <div className="basis-1/2">
        <Image
          src="/CorporationAboutUsOurCultureImage.jpg"
          alt="Our culture"
          width={1000}
          height={1000}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="basis-1/2">
        <h2 className="text-lg md:text-xl lg:text-2xl uppercase text-sky-800 font-bold my-5">
          Our Culture
        </h2>
        <p className="text-base md:text-lg font-semibold leading-7 mb-5">
          We have over 400 team members who are leaders, motivators, hustlers,
          coaches, creators and colleagues. We are driven by a set of values and
          principles that allow us to work together in a high-trust environment
          to solve the most difficult challenges in our industry. Together, we
          build the Flipp app, the Flipp web platform, an extensive distribution
          network, and a leading insights and analytics powerhouse among other
          innovative projects.
        </p>
        <p className="text-base md:text-lg font-semibold leading-7 mb-5">
          Our culture is at the center of everything we do. We’re honored to
          have been recognized through numerous accolades over the past three
          years.
        </p>
        <button className="bg-sky-700 text-white font-medium text-base md:text-lg px-8 py-3 rounded-full">
          <Link href="/corporation/culture"> Learn more about our culture</Link>
        </button>
      </div>
    </section>
  );
};

export default OurCulture;
