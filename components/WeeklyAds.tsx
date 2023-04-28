import Image from "next/image";

const WeeklyAds = () => {
  return (
    <div className="px-4 mt-5 flex flex-col md:flex-row">
      <div>
        <p className="text-center md:text-left text-3xl md:w-9/12 md:mx-auto">
          Save at over 2000 of your{" "}
          <span className="font-bold">favourite stores.</span>
        </p>
        <p className="text-center md:text-left w-9/12 mx-auto my-5">
          Flipp is your one-stop marketplace for savings and deals. Browse
          weekly digital flyers from retailers near you, or search for the items
          you need.
        </p>
        <p className="text-center md:text-left mx-auto w-9/12">
          For the best mobile experience and to browse products on-the-go,
          download the <span>Flipp app</span> today. Available on the App Store,
          Google Play, and Huawei AppGallery.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center mt-10 md:w-9/12 md:mx-auto md:gap-2">
          <div>
            <Image
              src="/WalmartLogo.png"
              alt="Walmart Logo"
              width="100"
              height="100"
            />
          </div>
          <Image
            src="/KrogerLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/HomeDepotLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/CvsLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/ToysrusLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/MeijerLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/FamilyDollarLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
          <Image
            src="/DicksLogo.png"
            alt="Kroger Logo"
            width="100"
            height="100"
          />
        </div>
        <div className="flex justify-center">
          <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
            Browse Flyers
          </button>
        </div>
      </div>
      <div>
        <img src="/WeeklyAdsPicture.jpeg" alt="Weekly Ads" />
      </div>
    </div>
  );
};

export default WeeklyAds;
