import Image from "next/image";
import Link from "next/link";

const RetailersData = [
  {
    imageSrc: "/WalmartLogo.png",
    imageAlt: "Walmart logo",
  },
  {
    imageSrc: "/KrogerLogo.png",
    imageAlt: "Kroger logo",
  },
  {
    imageSrc: "/HomeDepotLogo.png",
    imageAlt: "Home Depot logo",
  },
  {
    imageSrc: "/CvsLogo.png",
    imageAlt: "Cvs Logo",
  },
  {
    imageSrc: "/ToysrusLogo.png",
    imageAlt: "Toys R Us log",
  },
  {
    imageSrc: "/MeijerLogo.png",
    imageAlt: "Meijer logo",
  },
  {
    imageSrc: "/FamilyDollarLogo.png",
    imageAlt: "Family Dollar logo",
  },
  {
    imageSrc: "/DicksLogo.png",
    imageAlt: "Dicks logo",
  },
];

const WeeklyAds = () => {
  return (
    <section className="mt-14 flex flex-col lg:flex-row" id="weekly_ads">
      <div>
        <p className="text-center lg:text-left text-3xl md:w-9/12 md:mx-auto text-gray-700">
          Save at over 2000 of your{" "}
          <span className="font-bold">favourite stores.</span>
        </p>
        <p className="text-center lg:text-left w-9/12 mx-auto my-5 text-gray-700">
          Flipp is your one-stop marketplace for savings and deals. Browse
          weekly digital flyers from retailers near you, or search for the items
          you need.
        </p>
        <p className="text-center lg:text-left mx-auto w-9/12 text-gray-700">
          For the best mobile experience and to browse products on-the-go,
          download the <span>Flipp app</span> today. Available on the App Store,
          Google Play, and Huawei AppGallery.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center mt-10 md:mx-auto gap-3 md:gap-2 lg:gap-1 lg:px-16">
          {RetailersData.map((retailer, index) => (
            <Image
              src={retailer.imageSrc}
              alt={retailer.imageAlt}
              width={100}
              height={100}
              className="lg:w-16"
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/flyers"
            className="flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
          >
            Browse Flyers
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/WeeklyAdsPicture.jpeg"
          alt="Weekly Ads"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default WeeklyAds;
