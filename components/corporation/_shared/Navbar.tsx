import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navbarLinks = [
  {
    path: "/corporation/about_us",
    linkName: "About Us",
  },
  {
    path: "/corporation/platforms",
    linkName: "Platform",
  },
  {
    path: "/corporation/partners",
    linkName: "Partners",
  },
  {
    path: "/corporation/news",
    linkName: "News",
  },
];

const navbarSubLinks = [
  {
    path: "/corporation/culture",
    linkName: "Culture",
  },
  {
    path: "/corporation/teams",
    linkName: "Teams",
  },
  {
    path: "/corporation/internships",
    linkName: "Internships",
  },
  {
    path: "/corporation/job_openings",
    linkName: "Job Opening",
  },
];
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // @TODO: state to control the opening of a submenu - research better approach
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <nav className="fixed top-0 left-0 h-24 z-50 bg-white flex justify-between lg:justify-normal w-full items-center px-10">
      <Link href="/corporation">
        <Image
          src="/flippLogo.svg"
          alt="Flipp"
          width={80}
          height={60}
          style={{ width: "80px", height: "auto" }}
        />
      </Link>
      <nav className="grow hidden lg:flex justify-end px-5">
        <ul className="flex text-lg gap-x-2">
          {navbarLinks.map((link) => (
            <Link
              href={link.path}
              className={`${
                router.route === link.path
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "border-white"
              } font-medium hover:text-blue-800 px-4 py-2 border-b-2 hover:border-b-2 hover:border-blue-800`}
            >
              {link.linkName}
            </Link>
          ))}
          {/* https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state 
          https://stackoverflow.com/questions/62056034/tailwind-css-navigation-hover-dropdown-with-padding
          */}
          <li className="group relative px-4 py-2 hover:cursor-pointer hover:border-b-2 hover:border-blue-800 hover:text-blue-800">
            <h1 className="flex justify-center items-center font-medium">
              Careers & Culture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-1 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </h1>
            <div className="hidden group-hover:block absolute top-12 left-0 bg-white w-full">
              {navbarSubLinks.map((link) => (
                <Link
                  href={link.path}
                  className={`${
                    router.route === link.path
                      ? "bg-sky-700 text-white"
                      : "hover:text-blue-800 hover:bg-teal-200/10"
                  } p-2 inline-block font-medium w-full`}
                >
                  {link.linkName}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </nav>
      <div className="px-5 hidden lg:flex">
        <button className="text-lg bg-sky-800 text-white px-4 py-1.5 rounded-full">
          <Link href="/corporation/contact_us">Contact Us</Link>
        </button>
      </div>
      <div
        className="flex lg:hidden items-center pt-4 pr-4 pl-4 hover:cursor-pointer"
        onClick={() => toggleOpen()}
      >
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
        <nav className="absolute left-0 top-24 bg-white lg:hidden w-full flex justify-center">
          <ul className="flex flex-col gap-y-2 w-full font-medium">
            {navbarLinks.map((link) => (
              <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
                <Link
                  href={link.path}
                  className={`${
                    router.route === link.path ? "bg-sky-700 text-white" : null
                  } w-full text-center`}
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
            <li
              className="py-1 flex flex-col text-center justify-center hover:cursor-pointer w-full"
              onClick={() => toggleOpenSubMenu()}
            >
              <a className="flex w-full justify-center items-center">
                Careers & Culture{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-1 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </li>
            {openSubMenu ? (
              <div>
                <ul>
                  {navbarSubLinks.map((link) => (
                    <li className="py-1 my-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
                      <Link
                        href={link.path}
                        className={`${
                          router.route === link.path
                            ? "bg-sky-700 text-white"
                            : null
                        } w-full text-center`}
                      >
                        {link.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <li className="py-1 flex justify-center hover:bg-slate-200  hover:cursor-pointer w-full">
              <Link
                href="/corporation/contact_us"
                className="w-full text-center"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
