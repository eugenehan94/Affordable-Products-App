import Image from "next/image";
import Link from "next/link";

const CloseIcon = () => {
  return (
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
  );
};

const HamburgerIcon = () => {
  return (
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
  );
};

const NavbarMobile = ({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: Function;
}) => {
  return (
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
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
      {/* Mobile View Menu */}
      {open && (
        <div className="absolute left-0 top-16 md:hidden w-full flex flex-col justify-center items-center py-2.5 box-border bg-white shadow-lg border-t-2 border-gray-200">
          <Link href="/corporation" legacyBehavior>
            <a
              target="_blank"
              className="flex items-center justify-center text-gray-700 text-center h-14 w-full border-b border-gray-200"
            >
              About Flipp
            </a>
          </Link>
          <a
            href="https://app.flipp.com/"
            target="_blank"
            className="flex items-center justify-center text-gray-700 text-center h-14 w-full border-b border-gray-200"
          >
            Flipp Mobile App
          </a>
          <a
            href="https://blog.flipp.com/"
            target="_blank"
            className="flex items-center justify-center text-gray-700 text-center h-14 w-full"
          >
            Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
