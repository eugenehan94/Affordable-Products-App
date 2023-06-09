import Image from "next/image";
import Link from "next/link";

const Coupons = () => {
  return (
    <div className="px-4 mt-14" id="coupons">
      <div className="flex md:gap-4">
        <div className="hidden md:inline-block">
          {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
          <Image
            src="/CouponsPicture.jpg"
            alt="Coupons"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <p className="max-w-full mt-7 mb-5 text-center md:text-left text-3xl md:w-9/12 text-gray-700">
            Add coupons directly to your{" "}
            <span className="font-bold">loyalty cards.</span>
          </p>
          <p className="w-9/12 text-center md:text-left mx-auto md:mx-0 mb-3.5 text-gray-700">
            With Flipp, there&#39;s no need to carry around all your loyalty
            cards. Simply add your cards to the Flipp app and clip your coupons
            digitally to save in-store.
          </p>
          <p className="w-9/12 text-center md:text-left mx-auto md:mx-0 text-gray-700">
            Download the Flipp App to find and clip coupons on-the-go
          </p>
          <div className=" mt-5 grid grid-cols-3 grid-rows-2 justify-items-center md:justify-items-start items-center">
            <Image
              src="/CVSPharmacyWithLogo.png"
              alt="Walmart Logo"
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
              src="/MeijerLogo.png"
              alt="Kroger Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/PublixLogo.png"
              alt="Kroger Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/RiteAidLogo.png"
              alt="Kroger Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/WalgreensLogo.png"
              alt="Kroger Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex justify-center">
            {/* <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
              Browse Coupons
            </button> */}
            <Link
              href="/coupons"
              className="flex items-center justify-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
            >
              Browse Coupons
            </Link>
          </div>
        </div>
      </div>
      <div className="inline-block md:hidden">
        {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
        <Image
          src="/CouponsPicture.jpg"
          alt="Coupons"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Coupons;
