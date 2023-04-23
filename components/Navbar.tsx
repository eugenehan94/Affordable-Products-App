import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex justify-between pt-4 pr-4 pl-4">
        <div className="flex justify-center items-center gap-x-4">
          <Image src="/flippLogo.svg" alt="Flipp" width="60" height="60" />
          <h1>Flyers</h1>
          <h1>Coupons</h1>
          <h1>Shopping List</h1>
          <h1>Search</h1>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <h1>About Flipp</h1>
          <h1>Flipp Mobile App</h1>
          <h1>Blog</h1>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden justify-between pt-4 pr-4 pl-4">
        <div className="flex justify-center items-center gap-x-4">
          <Image src="/flippLogo.svg" alt="Flipp" width="60" height="60" />
        </div>

        <div className="flex justify-center items-center gap-x-4">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
