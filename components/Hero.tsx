import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-4 my-5">
      <div className="flex flex-col md:flex-row mt-12 justify-center md:gap-10">
        <div className="text-2xl max-w-md text-center md:text-left">
          <span className="text-4xl text-gray-700">
            Save time and money weekly with digital ads on Flipp.
          </span>
        </div>
        <div>
          <p className="text-center text-large mt-3.5 text-gray-700">
            <span className="font-bold">Type your postal code</span> below to
            see the latest deals near you.
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="M4J1A1"
              className="pl-2.5 pt-1.5 pr-1.5 pb-1.5 text-2xl border-gray-400 border-solid border-2 rounded"
            ></input>
            {/* <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded p-1 mt-1">
              Start Saving
            </button> */}
            <Link
              href="/flyers"
              className=" text-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded p-1 mt-1"
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
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
