import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="bg-slate-100">
      <div className="w-9/12 md:w-11/12 mx-auto pt-16 pb-16 md:pb-0 md:flex">
        <div>
          <p className="text-center md:text-left text-3xl text-gray-700">
            Save on-the-go with the{" "}
            <span className="font-bold">Flipp app.</span>
          </p>
          <p className="text-center md:text-left text-base mt-5 text-gray-700">
            Add your loyalty cards, sync your shopping list across devices, and
            share your list with your shopping partner — only on the app!
          </p>
          <div className="flex flex-col md:flex-row gap-1 justify-center items-center mt-12">
            <div>
              <Image
                src="/AppStorePicture.png"
                alt="Apple Store"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                src="/GooglePlayPicture.png"
                alt="Google Store"
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden md:inline-block ">
          {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
          <Image
            src="/DownloadPicture.png"
            alt="Download"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="-translate-y-24"
          />
        </div>
      </div>
      {/* NOTE: Code below is the back to top button (Up arrow) */}
      <div className=" relative w-full flex justify-end">
        <a
          href="#"
          className="absolute -translate-y-7 -translate-x-5 md:-translate-x-7 shadow hover:shadow-xl cursor-pointer w-14 h-14 rounded-full bg-white flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            // NOTE: "stroke" is the change colour of the icon
            stroke="#9fa0a1"
            className="w-10 h-10"
          >
            <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default DownloadApp;
