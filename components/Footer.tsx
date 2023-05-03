import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="md:flex">
        <div className="flex justify-around content-start flex-1">
          <Image src="/flippLogo.svg" alt="Flipp" width="60" height="60" />
          <ul className="text-sm text-gray-500">
            <li className="mb-3">Retail Platform</li>
            <li className="mb-3">Media Platform</li>
            <li className="mb-3">Mobile App</li>
            <li className="mb-3">About Us</li>
            <li className="mb-3">Contact Us</li>
            <li className="mb-3">FAQ/Help</li>
          </ul>
          <ul className="text-sm text-gray-500">
            <li className="mb-3">Careers</li>
            <li className="mb-3">Client Login</li>
            <li className="mb-3">Privacy Policy</li>
            <li className="mb-3">Terms of Use</li>
            <li className="mb-3">Accessibility Plan</li>
            <li className="mb-3">Ad Choices</li>
          </ul>
        </div>
        <div className="md:w-4/12">
          <p className="text-sm text-gray-500 py-4 md:py-0 text-center md:text-start">
            For shopping tips, everyday living, and ideas on a budget, visit the
            Flipp Blog today.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
              Read Blog
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200"></div>
      <div>
        <p className="text-xs text-gray-500 text-center py-8">© Copyright 2023 Flipp Corp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
