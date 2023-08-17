import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//Components
import NavbarMobile from "./NavbarMobile";

const NavbarLinksData = [
  {
    link: "#weekly_ads",
    linkName: "Flyers",
  },
  {
    link: "#coupons",
    linkName: "Coupons",
  },
  {
    link: "#shopping_list",
    linkName: "Shopping List",
  },
  {
    link: "#search",
    linkName: "Search",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hidden md:flex justify-between pt-4 pr-4 pl-4">
        <div className="flex justify-center items-center gap-x-9">
          <Image
            src="/flippLogo.svg"
            alt="Flipp"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
          {NavbarLinksData.map((link, index) => (
            <a href={link.link} className="text-gray-700" key={index}>
              {link.linkName}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-4">
          {/* https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
              legacyBehavior is added to prevent error and allows us to open new Next js
              link in new tab - required functionality
          */}
          <Link href="/corporation" legacyBehavior>
            <a target="_blank" className="text-gray-700">
              About Flipp
            </a>
          </Link>
          <a
            href="https://app.flipp.com/"
            target="_blank"
            className="text-gray-700"
          >
            Flipp Mobile App
          </a>
          <a
            href="https://blog.flipp.com/"
            target="_blank"
            className="text-gray-700"
          >
            Blog
          </a>
        </div>
      </div>
      {/* Mobile View */}
      <NavbarMobile open={open} handleClick={handleClick} />
    </div>
  );
};

export default Navbar;
