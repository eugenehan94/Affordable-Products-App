import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="my-5">
      <div className="flex flex-col md:flex-row mt-12 justify-center">
        <div className="text-center md:text-left md:basis-1/2 md:px-5">
          <span className="text-2xl md:text-4xl text-gray-700 leading-relaxed">
            Save time and money weekly with digital ads on Flipp.
          </span>
        </div>
        <div className="md:basis-1/2 md:px-10">
          <p className="md:text-lg text-center text-large my-3.5 text-gray-700">
            <span className="font-bold">Type your postal code</span> below to
            see the latest deals near you.
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="M4J1A1"
              maxLength={7}
              className="pl-2.5 pt-1.5 pr-1.5 pb-1.5 text-2xl border-gray-400 border-solid border-2 rounded font-bold uppercase"
            ></input>
            <Link
              href="/flyers"
              className=" text-center cursor-pointer bg-blue-600 hover:bg-sky-400 text-white rounded p-1 mt-1"
            >
              Start Saving
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-10">
        {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
        <Image
          src="/HeroImage.png"
          alt="Flipp Hero"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
