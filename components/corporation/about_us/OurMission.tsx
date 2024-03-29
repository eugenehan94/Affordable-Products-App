import YoutubeVideo from "./YoutubeVideo";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="p-5 my-24">
      <div className="md:flex">
        <div className="basis-1/2">
          <div className="h-full flex flex-col justify-center lg:justify-normal">
            <h2 className="text-sky-800 uppercase text-lg mb-4 md:text-xl lg:text-2xl font-bold">
              Our Mission
            </h2>
            <h2 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold">
              We want to help shoppers provide for their families by making life
              more affordable.
            </h2>
            <div className="hidden lg:inline">
              <p className="my-5 font-semibold leading-7 md:text-lg">
                The largest retailers and brands in North America use the Flipp
                platform to create, curate and distribute savings content to
                millions of highly-engaged shoppers every day.
              </p>
              <p className="mb-5 font-semibold leading-7 md:text-lg">
                Millions of shoppers across North America use Flipp as their
                primary weekly shopping tool to decide what to buy and where to
                buy.
              </p>
              <p className="mb-5 font-semibold leading-7 md:text-lg">
                With the recent acquisition of reebee, Flipp’s Shopper
                Consideration Platform offers platform improvements and the
                ability to reach even more households. For more information{" "}
                <Link href="/corporation/news" className="text-sky-700">read here</Link>.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 mt-10 mb-20 lg:mt-0 lg:mb-0">
          <YoutubeVideo />
        </div>
      </div>
      <div className="lg:hidden">
        <p className="my-5 font-semibold leading-7 md:text-lg">
          The largest retailers and brands in North America use the Flipp
          platform to create, curate and distribute savings content to millions
          of highly-engaged shoppers every day.
        </p>
        <p className="mb-5 font-semibold leading-7 md:text-lg">
          Millions of shoppers across North America use Flipp as their primary
          weekly shopping tool to decide what to buy and where to buy.
        </p>
        <p className="mb-5 font-semibold leading-7 md:text-lg">
          With the recent acquisition of reebee, Flipp’s Shopper Consideration
          Platform offers platform improvements and the ability to reach even
          more households. For more information{" "}
          <Link href="/corporation/news" className="text-sky-700">read here</Link>.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
