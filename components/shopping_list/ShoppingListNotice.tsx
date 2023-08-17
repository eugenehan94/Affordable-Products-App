import Image from "next/image";

const ShoppingListNotice = () => {
  return (
    <div className="p-2 bg-sky-100 border border-slate-300 flex gap-2">
      <div className="grow-0">
        <Image
          src="/ClippingCoupons.png"
          alt="clipping coupons"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-base leading-5 font-black">
            We've made saving even easier
          </h2>
          <p className="text-sm font-normal">
            Sign in to your Flipp account to save and sync your loyalty cards.
            <span className="text-sky-400 cursor-pointer"> Download</span> the
            Flipp App to get them on the go
          </p>
        </div>
        <div className="flex gap-2 md:flex-col lg:flex-row">
          <div className="border border-slate-200 hover:cursor-pointer">
            <Image
              src="/SignInWithGoogle.png"
              alt="sign in with google"
              width={185}
              height={40}
              //   style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="border border-slate-200 hover:cursor-pointer">
            <Image
              src="/SignInWithFacebook.png"
              alt="sign in with google"
              width={185}
              height={40}
              //   style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListNotice;
