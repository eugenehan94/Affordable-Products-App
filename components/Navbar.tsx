import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hidden md:flex justify-between pt-4 pr-4 pl-4">
        <div className="flex justify-center items-center gap-x-4">
          <Image
            src="/flippLogo.svg"
            alt="Flipp"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
          <a href="#weekly_ads" className="text-gray-700">
            Flyers
          </a>
          <a href="#coupons" className="text-gray-700">
            Coupons
          </a>
          <a href="#shopping_list" className="text-gray-700">
            Shopping List
          </a>
          <a href="#search" className="text-gray-700">
            Search
          </a>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <h1 className="text-gray-700">About Flipp</h1>
          <h1 className="text-gray-700">Flipp Mobile App</h1>
          <h1 className="text-gray-700">Blog</h1>
        </div>
      </div>
      {/* Mobile View */}
      <div className="relative">
        <div className="flex md:hidden justify-between pt-4 pr-4 pl-4">
          <div className="flex justify-center items-center gap-x-4">
            <Image
              src="/flippLogo.svg"
              alt="Flipp"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div
            className="flex justify-center items-center gap-x-4 cursor-pointer"
            onClick={() => handleClick()}
          >
            {open ? (
              // Close X button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="#9fa0a1"
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
                stroke="#9fa0a1"
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
        </div>
        {/* Mobile View Menu */}
        {open && (
          <div className="absolute left-0 top-16 md:hidden  w-full flex flex-col justify-center items-center py-2.5 box-border bg-white shadow-lg border-t-2 border-gray-200">
            <a className="text-gray-700 text-center h-14">About Flipp</a>
            <a className="text-gray-700 text-center h-14">Flipp Mobile App</a>
            <a className="text-gray-700 text-center h-14">Blog</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
