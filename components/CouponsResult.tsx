interface CouponsData {
  image: string;
  savingsText: string;
  promoTextOne: string;
  promoTextTwo: string;
  retailer: string;
}
const CouponsResult = ({ couponsData }: { couponsData: CouponsData[] }) => {
  console.log("couponsData: ", couponsData);
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {couponsData.map((coupon, index) => (
        <div
          className="relative basis-52 border border-1 border-slate-300 p-1 rounded cursor-pointer"
          key={index}
        >
          <div className="absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
          </div>
          <div className="border-dashed border-2 border-slate-300 p-1 rounded">
            <div className="h-24">
              <img
                src={coupon.image}
                alt={coupon.promoTextOne}
                className="h-full"
              />
            </div>
            <p className="text-sm font-normal">Save</p>
            <p className="text-sm font-semibold">{coupon.savingsText}</p>
            <p className="text-sm leading-3">{coupon.promoTextOne}</p>
            <p className="text-sm leading-3">{coupon.promoTextTwo}</p>
          </div>
          <div className="border border-1 border-slate-300 p-1 mt-1">
            <p className="text-sm font-normal">
              Matchup at{" "}
              <span className="text-sky-600 font-bold">{coupon.retailer}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponsResult;
