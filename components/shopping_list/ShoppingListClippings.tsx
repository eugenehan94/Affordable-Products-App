import Link from "next/link";

const ShoppingListClippings = () => {
  return (
    <div className="bg-sky-100 flex flex-col justify-center items-center p-5 m-5 md:m-1">
      <h3 className="font-bold text-sm">No Clippings Yet</h3>
      <p className="text-sm my-3.5">
        Items you have clipped in flyers and your shopping list will be saved
        here.
      </p>
      <Link
        href="/flyers"
        className="text-sm border-2 border-sky-500 text-sky-500 py-2.5 px-5 rounded-sm font-medium shadow"
      >
        Start Browsing Flyers
      </Link>
    </div>
  );
};

export default ShoppingListClippings;
