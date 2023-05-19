import { useState } from "react";
import Image from "next/image";

const DownloadAppButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    // https://stackoverflow.com/questions/30533171/react-js-conditionally-applying-class-attributes
    // Apply conditional className
    <div
      className={
        "hidden sm:flex flex-col items-end fixed -bottom-2 right-4 w-11/12 h-96 transition duration-150 ease-in-out z-50 " +
        (open ? "translate-y-0" : "translate-y-80")
      }
    >
      <button
        className="flex items-center justify-center mr-7 py-5 px-6 bg-sky-600 font-semibold text-base text-white rounded-t-md"
        onClick={() => handleClick()}
      >
        Download Flipp
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        )}
      </button>

      <div className="relative w-full h-full flex justify-end items-end">
        <span className="absolute top-8 right-2 z-30 font-black text-3xl w-72">Use Flipp on your phone! Try the free app now.</span>
        <Image
          src="/DownloadAppPicture.jpg"
          alt="Download Flipp"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "450px", height: "480px" }}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default DownloadAppButton;
