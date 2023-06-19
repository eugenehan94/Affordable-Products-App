import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-6">
      <div className="lg:flex lg:gap-x-5">
        <div className="lg:basis-2/5">
          <Image
            src="/flippLogo.svg"
            alt="Flipp"
            width={100}
            height={100}
            className="mb-5"
          />
          <p className="mb-5 leading-7 font-medium md:text-lg">
            This essential app brings you the latest weekly ads, deals, and
            coupons from more than 2000 of your favorite stores.
          </p>
          <div className="flex gap-x-2 mb-5">
            <Image
              src="/AppStorePicture.png"
              alt="Apple Store"
              width={120}
              height={100}
              className="cursor-pointer"
            />

            <Image
              src="/GooglePlayPicture.png"
              alt="Google Store"
              width={120}
              height={100}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-stretch gap-y-4 lg:basis-3/5">
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Company</li>
            <li>Platforms</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Support</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Client Login</li>
            <li>Privacy Statement</li>
            <li>Terms of Use</li>
            <li>Accessibility Plan</li>
          </ul>
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Deals</li>
            <li>Download Flipp</li>
            <li>Flipp.com</li>
          </ul>
          <div className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <h2 className="text-sky-900 font-bold md:text-2xl">Follow Us</h2>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 mb-4">
        <p className="text-center text-xs lg:font-medium">
          © Copyright 2023. Flipp Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
