import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="bg-slate-100">
      <div className="w-9/12 md:w-11/12 mx-auto py-16 md:flex">
        <div>
          <p className="text-center md:text-left text-3xl">
            Save on-the-go with the{" "}
            <span className="font-bold">Flipp app.</span>
          </p>
          <p className="text-center md:text-left text-base mt-5">
            Add your loyalty cards, sync your shopping list across devices, and
            share your list with your shopping partner — only on the app!
          </p>
          <div className="flex flex-col md:flex-row gap-1 justify-center items-center mt-12">
            <div>
              <Image
                src="/AppStorePicture.png"
                alt="Kroger Logo"
                width="150"
                height="150"
              />
            </div>
            <div>
              <Image
                src="/GooglePlayPicture.png"
                alt="Kroger Logo"
                width="150"
                height="150"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full hidden md:inline-block">
          <img src="/DownloadPicture.png" />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
