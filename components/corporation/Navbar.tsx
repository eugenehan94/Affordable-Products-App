import { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 h-24 z-50 bg-white flex justify-between lg:justify-normal w-full items-center px-10">
      <div className="">
        <Image
          src="/flippLogo.svg"
          alt="Flipp"
          width={80}
          height={60}
          style={{ width: "80px", height: "auto" }}
        />
      </div>
      <nav className="grow hidden lg:flex justify-end px-5">
        <ul className="flex text-lg gap-x-8">
          <li>
            <h1>About Us</h1>
          </li>
          <li>
            <h1>Platform</h1>
          </li>
          <li>
            <h1>Partners</h1>
          </li>
          <li>
            <h1>Careers & Culture</h1>
          </li>
        </ul>
      </nav>
      <div className="px-5 hidden lg:flex">
        <button className="text-lg bg-sky-800 text-white px-4 py-1.5 rounded-full">
          Contact Us
        </button>
      </div>
      <div className="flex lg:hidden items-center pt-4 pr-4 pl-4">
        {open ? ( // Close X button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#000"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#000"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      {/* Mobile View Menu */}
      {open && (
        <nav className="absolute left-0 top-24 lg:hidden w-full flex justify-center">
          <ul className="flex flex-col gap-y-2 w-full font-medium">
            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <a>About Us</a>
            </li>
            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <a>Platform</a>
            </li>
            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <a>Partners</a>
            </li>
            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <a>Careers & Culture</a>
            </li>
            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
