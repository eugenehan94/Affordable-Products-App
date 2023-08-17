import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaBlog } from "react-icons/fa6";
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
            <a
              href="https://app.flipp.com/?shortlink=f7f63616&c=corp.flipp.com&pid=Acquisition&source_caller=ui"
              target="_blank"
            >
              <Image
                src="/AppStorePicture.png"
                alt="Apple Store"
                width={120}
                height={100}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://app.flipp.com/?shortlink=f7f63616&c=corp.flipp.com&pid=Acquisition&source_caller=ui"
              target="_blank"
            >
              <Image
                src="/GooglePlayPicture.png"
                alt="Google Store"
                width={120}
                height={100}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-stretch gap-y-4 lg:basis-3/5">
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Company</li>
            <Link href="/corporation/platforms">Platforms</Link>
            <Link href="/corporation/about_us">About Us</Link>
            <Link href="/corporation/culture">Careers</Link>
            <a href="https://blog.flipp.com/" target="_blank">
              <li>Blog</li>
            </a>
          </ul>
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Support</li>
            <Link href="/corporation/contact_us">Contact Us</Link>
            <a href="https://help.flipp.com/" target="_blank">
              <li>FAQ</li>
            </a>
            <a
              href="https://sso.wishabi.com/login?service=https%3A%2F%2Fmerchants.wishabi.ca%2Flogin"
              target="_blank"
            >
              <li>Client Login</li>
            </a>
            <a href="https://corp.flipp.com/legal/privacy/" target="_blank">
              <li>Privacy Statement</li>
            </a>
            <a
              href="https://corp.flipp.com/legal/terms_of_use/"
              target="_blank"
            >
              <li>Terms of Use</li>
            </a>
            <a
              href="https://corp.flipp.com/legal/accessibility_plan/"
              target="_blank"
            >
              <li>Accessibility Plan</li>
            </a>
          </ul>
          <ul className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <li className="text-sky-900 font-bold md:text-2xl">Deals</li>
            <a
              href="https://app.flipp.com/?shortlink=f7f63616&c=corp.flipp.com&pid=Acquisition&source_caller=ui"
              target="_blank"
            >
              <li>Download Flipp</li>
            </a>
            <Link href="/">Flipp.com</Link>
          </ul>
          <div className="basis-1/2 md:basis-1/4 font-semibold flex flex-col gap-y-4 md:text-lg">
            <h2 className="text-sky-900 font-bold md:text-2xl">Follow Us</h2>
            <div className="flex gap-x-5">
              <a href="https://www.instagram.com/getflipp/" target="_blank">
                <FaInstagram className="text-xl text-blue-600" />
              </a>
              <a href="https://www.facebook.com/getflipp" target="_blank">
                <FaFacebook className="text-xl text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/company/flipp/" target="_blank">
                <FaLinkedin className="text-xl text-blue-600" />
              </a>
              <a href="https://blog.flipp.com/" target="_blank">
                <FaBlog className="text-xl text-blue-600" />
              </a>
            </div>
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
