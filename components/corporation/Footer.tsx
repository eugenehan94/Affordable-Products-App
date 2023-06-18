import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <Image
          src="/flippLogo.svg"
          alt="Flipp"
          width={80}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
        <p>
          This essential app brings you the latest weekly ads, deals, and
          coupons from more than 2000 of your favorite stores.
        </p>
        <Image
          src="/AppStorePicture.png"
          alt="Apple Store"
          width={150}
          height={150}
          style={{ width: "auto", height: "auto" }}
          className="cursor-pointer"
        />
      </div>
      <Image
        src="/GooglePlayPicture.png"
        alt="Google Store"
        width={150}
        height={150}
        style={{ width: "auto", height: "auto" }}
        className="cursor-pointer"
      />
      <div>
        <ul>
          <li>Company</li>
          <li>Platforms</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Client Login</li>
          <li>Privacy Statement</li>
          <li>Terms of Use</li>
          <li>Accessibility Plan</li>
        </ul>
        <ul>
          <li>Deals</li>
          <li>Download Flipp</li>
          <li>Flipp.com</li>
        </ul>
        <div>
          <h2>Follow Us</h2>
        </div>
        <div>
          <p>© Copyright 2023. Flipp Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
