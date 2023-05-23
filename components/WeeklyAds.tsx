import Image from "next/image";
import Link from "next/link";
const WeeklyAds = () => {
  return (
    <div className="px-4 mt-14 flex flex-col md:flex-row" id="weekly_ads">
      <div>
        <p className="text-center md:text-left text-3xl md:w-9/12 md:mx-auto text-gray-700">
          Save at over 2000 of your{" "}
          <span className="font-bold">favourite stores.</span>
        </p>
        <p className="text-center md:text-left w-9/12 mx-auto my-5 text-gray-700">
          Flipp is your one-stop marketplace for savings and deals. Browse
          weekly digital flyers from retailers near you, or search for the items
          you need.
        </p>
        <p className="text-center md:text-left mx-auto w-9/12 text-gray-700">
          For the best mobile experience and to browse products on-the-go,
          download the <span>Flipp app</span> today. Available on the App Store,
          Google Play, and Huawei AppGallery.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center mt-10 md:w-9/12 md:mx-auto gap-3 md:gap-2">
          <div>
            <Image
              src="/WalmartLogo.png"
              alt="Walmart Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <Image
            src="/KrogerLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/HomeDepotLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/CvsLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/ToysrusLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/MeijerLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/FamilyDollarLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/DicksLogo.png"
            alt="Kroger Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex justify-center">
          {/* <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
            Browse Flyers
          </button> */}
          <Link
            href="/flyers"
            className="flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
          >
            Browse Flyers
          </Link>
        </div>
      </div>
      <div>
        <img src="/WeeklyAdsPicture.jpeg" alt="Weekly Ads" />
      </div>
    </div>
  );
};

export default WeeklyAds;
