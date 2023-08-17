import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-8">
      <div className="md:flex md:justify-between">
        <div className="flex justify-around items-start md:basis-1/2">
          <Image
            src="/flippLogo.svg"
            alt="Flipp"
            width={60}
            height={60}
            className="ml-2"
          />
          <div className="flex justify-around w-full">
            <div className="flex flex-col text-sm text-gray-500">
              <Link
                href="/corporation/platforms"
                rel="noopener noreferrer"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Retail Platform
              </Link>
              <Link
                href="/corporation/platforms"
                rel="noopener noreferrer"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Media Platform
              </Link>
              <a
                href="https://flipp.app.link/KYJFGWvFo1"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Mobile App
              </a>
              <Link
                href="/corporation/about_us"
                rel="noopener noreferrer"
                target="_blank"
                className="mb-3 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/corporation/contact_us"
                rel="noopener noreferrer"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Contact Us
              </Link>
              <a
                href="https://help.flipp.com/"
                target="_blank"
                className="hover:underline"
              >
                FAQ/Help
              </a>
            </div>
            <div className="text-sm flex flex-col text-gray-500">
              <Link
                href="/corporation/culture"
                rel="noopener noreferrer"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Careers
              </Link>
              <a
                href="https://merchants.wishabi.com/"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Client Login
              </a>
              <a
                href="https://corp.flipp.com/legal/privacy/"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="https://corp.flipp.com/legal/terms_of_use/"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Terms of Use
              </a>
              <a
                href="https://corp.flipp.com/legal/accessibility_plan/"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Accessibility Plan
              </a>
              <a
                href="https://corp.flipp.com/legal/privacy/#AdChoices"
                target="_blank"
                className="mb-3 hover:underline"
              >
                Ad Choices
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-4/12">
          <p className="text-sm text-gray-500 py-4 md:py-0 text-center md:text-start">
            For shopping tips, everyday living, and ideas on a budget, visit the
            Flipp Blog today.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://blog.flipp.com/?utm_source=Flipp%20Web&utm_medium=Organic&utm_campaign=Blog%20Home"
              target="_blank"
              className="flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
            >
              Read Blog
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200 mb-5"></div>
      <div className="flex justify-center gap-x-5">
        <a href="https://www.facebook.com/getflipp" target="_blank">
          <FaSquareFacebook className="text-2xl text-gray-500" />
        </a>
        <a href="https://www.instagram.com/getflipp/" target="_blank">
          <FaInstagram className="text-2xl text-gray-500" />
        </a>
        <a href="https://www.linkedin.com/company/flipp/" target="_blank">
          <FaLinkedin className="text-2xl text-gray-500" />
        </a>
      </div>
      <div>
        <p className="text-xs text-gray-500 text-center py-6">
          © Copyright 2023 Flipp Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
