interface FlyerData {
  dealEnds: string;
  image: string;
  merchantLogo: string;
  merchantName: string;
}

const FlyerResults = ({ flyersData }: { flyersData: FlyerData[] }) => {
  return (
    <div className="my-24 px-2.5 md:px-8 md:ml-44">
      {flyersData.map((flyer: FlyerData, i: number) => (
        <div className="relative p-2 mt-5 border border-slate-200" key={i}>
          <div className="absolute flex justify-center items-center top-1 right-2 w-14 h-14 bg-white rounded-full shadow-2xl hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#8493a6"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <img
            src={flyer.image}
            alt={flyer.merchantName}
            className="w-full h-full"
          />
          <div className="flex justify-start items-center gap-x-2">
            <img
              src={flyer.merchantLogo}
              alt={flyer.merchantName}
              className="w-20"
            />
            <div className="grow my-2 ">
              <h1 className="text-base text-sky-600">{flyer.merchantName}</h1>
              <p className="text-sm text-slate-500">{flyer.dealEnds}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyerResults;
