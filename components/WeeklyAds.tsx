import Image from "next/image";

const WeeklyAds = () => {
  return (
    <div className="px-4 mt-5">
      <p className="text-center text-3xl">
        Save at over 2000 of your{" "}
        <span className="font-bold">favourite stores.</span>
      </p>
      <p className="text-center w-9/12 mx-auto my-5">
        Flipp is your one-stop marketplace for savings and deals. Browse weekly
        digital flyers from retailers near you, or search for the items you
        need.
      </p>
      <p className="text-center mx-auto w-9/12">
        For the best mobile experience and to browse products on-the-go,
        download the <span>Flipp app</span> today. Available on the App Store,
        Google Play, and Huawei AppGallery.
      </p>
      <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center mt-10">
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
        <Image src="/CvsLogo.png" alt="Kroger Logo" width="100" height="100" />
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
  );
};

export default WeeklyAds;
