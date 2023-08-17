import Image from "next/image";
import Link from "next/link";

const RetailersData = [
  {
    imageSrc: "/CVSPharmacyWithLogo.png",
    imageAlt: "CVS Pharmacy logo",
  },
  {
    imageSrc: "/FamilyDollarLogo.png",
    imageAlt: "Family Dollar logo",
  },
  {
    imageSrc: "/MeijerLogo.png",
    imageAlt: "Meijer logo",
  },
  {
    imageSrc: "/PublixLogo.png",
    imageAlt: "Publix logo",
  },
  {
    imageSrc: "/RiteAidLogo.png",
    imageAlt: "Rite Aid logo",
  },
  {
    imageSrc: "/WalgreensLogo.png",
    imageAlt: "Walgreens logo",
  },
];

const Coupons = () => {
  return (
    <section className="mt-14 lg:flex lg:flex-row-reverse" id="coupons">
      <div className="flex flex-col">
        <div>
          <p className="text-center lg:text-left text-3xl md:w-9/12 md:mx-auto text-gray-700">
            Add coupons directly to your{" "}
            <span className="font-bold">loyalty cards.</span>
          </p>
          <p className="text-center lg:text-left w-9/12 mx-auto my-5 text-gray-700">
            With Flipp, there&#39;s no need to carry around all your loyalty
            cards. Simply add your cards to the Flipp app and clip your coupons
            digitally to save in-store.
          </p>
          <p className="text-center lg:text-left w-9/12 mx-auto my-5 text-gray-700">
            Download the{" "}
            <a
              href="https://app.flipp.com/"
              target="_blank"
              className="hover:cursor-pointer underline font-medium"
            >
              Flipp App
            </a>{" "}
            to find and clip coupons on-the-go
          </p>
          <div className="mt-5 md:mt-8 grid grid-cols-3 lg:grid-cols-4 grid-rows-2 justify-items-center items-center lg:px-16">
            {RetailersData.map((retailer, index) => (
              <Image
                src={retailer.imageSrc}
                alt={retailer.imageAlt}
                width={100}
                height={100}
                className="w-20"
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/coupons"
              className="flex items-center justify-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
            >
              Browse Coupons
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
        <Image
          src="/CouponsPicture.jpg"
          alt="Coupons"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Coupons;
