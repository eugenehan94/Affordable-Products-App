import Image from "next/image";

const FlyerResults = ({ flyersData }: { flyersData: any }) => {
  console.log("flyersData: ", flyersData);
  return (
    <div className="my-20 px-2.5 md:px-8 md:ml-44">
      <h1>Flyer Page</h1>
      {flyersData.map((flyer: any, i: number) => (
        <div className="p-2 border border-slate-200" key={i}>
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
            <div className="grow">
              <h1>{flyer.merchantName}</h1>
              <h1>{flyer.dealEnds}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyerResults;
