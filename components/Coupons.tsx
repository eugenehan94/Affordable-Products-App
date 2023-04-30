import Image from "next/image";

const Coupons = () => {
  return (
    <div className="px-4">
      <div className="flex">
        <div className="hidden md:inline-block">
          <img src="/CouponsPicture.jpg" alt="Coupons" />
        </div>
        <div>
          <p className="max-w-full mt-7 mb-5 text-center text-3xl">
            Add coupons directly to your{" "}
            <span className="font-bold">loyalty cards.</span>
          </p>
          <p className="w-9/12 text-center mx-auto mb-3.5">
            With Flipp, there’s no need to carry around all your loyalty cards.
            Simply add your cards to the Flipp app and clip your coupons
            digitally to save in-store.
          </p>
          <p className="w-9/12 text-center mx-auto">
            Download the Flipp App to find and clip coupons on-the-go
          </p>
          <div className=" mt-5 grid grid-cols-3 grid-rows-2 justify-items-center items-center">
            <Image
              src="/CVSPharmacyWithLogo.png"
              alt="Walmart Logo"
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
              src="/MeijerLogo.png"
              alt="Kroger Logo"
              width="100"
              height="100"
            />
            <Image
              src="/PublixLogo.png"
              alt="Kroger Logo"
              width="100"
              height="100"
            />
            <Image
              src="/RiteAidLogo.png"
              alt="Kroger Logo"
              width="100"
              height="100"
            />
            <Image
              src="/WalgreensLogo.png"
              alt="Kroger Logo"
              width="100"
              height="100"
            />
          </div>
          <div className="flex justify-center">
            <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
              Browse Coupons
            </button>
          </div>
        </div>
      </div>
      <div className="inline-block md:hidden">
        <img src="/CouponsPicture.jpg" alt="Coupons" />
      </div>
    </div>
  );
};

export default Coupons;
