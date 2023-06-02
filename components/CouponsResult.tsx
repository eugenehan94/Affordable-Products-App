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
        <div className="basis-52 border border-1 border-slate-300 p-1 rounded" key={index}>
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
          <div>
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
