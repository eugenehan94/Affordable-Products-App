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
    <div className="mt-5">
      {couponsData.map((coupon, index) => (
        <div className="flex flex-col w-1/2" key={index}>
          <div className="border-dashed border-2 border-slate-300">
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
          {/* <div>
            <p className="text-sm font-normal">
              Matchup at{" "}
              <span className="text-sky-600 font-bold">{coupon.retailer}</span>
            </p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CouponsResult;
