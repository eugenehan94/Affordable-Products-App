import ShoppingListAddItem from "./ShoppingListAddItem";
import ShoppingListClippings from "./ShoppingListClippings";
import ShoppingListGetStarted from "./ShoppingListGetStarted";
import ShoppingListNotice from "./ShoppingListNotice";
import ShoppingListRecommendedItems from "./ShoppingListRecommendedItems";

const ShoppingListResult = () => {
  return (
    <div className="flex gap-2">
      <div className="basis-full md:basis-2/5">
        <ShoppingListAddItem />
        <h1 className="font-black text-xs uppercase text-slate-500">
          My Clippings
        </h1>
        <ShoppingListClippings />
        <ShoppingListGetStarted />
      </div>
      <div className="hidden md:inline-block basis-3/5">
        <ShoppingListNotice />
        <ShoppingListRecommendedItems />
      </div>
    </div>
  );
};

export default ShoppingListResult;
