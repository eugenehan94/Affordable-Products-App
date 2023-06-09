import Link from "next/link";
import Image from "next/image";

import ShoppingListNotice from "./ShoppingListNotice";

const ShoppingListResult = () => {
  return (
    <div className="flex gap-2">
      <div className="basis-full md:basis-2/5">
        <div className="hidden md:flex gap-1 px-1 my-7">
          <input
            type="text"
            placeholder="+Add an item"
            className="border-2 border-sky-600 rounded pt-px pr-2.5 pl-4 text-sm h-10"
          ></input>
          <button className="border border-slate-300 hover:border-black shadow h-10 w-10 flex justify-center items-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#8493a6"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
          </button>
          <button className="border border-slate-300 hover:border-black h-10 rounded px-1 text-sm">
            <span className="flex items-center justify-center text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#8493a6"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span className="hidden lg:inline-block">Clean Up List</span>
            </span>
          </button>
        </div>
        <h1 className="font-black text-xs uppercase text-slate-500">
          My Clippings
        </h1>
        <div className="bg-sky-100 flex flex-col justify-center items-center p-5 m-5 md:m-1">
          <h3 className="font-bold text-sm">No Clippings Yet</h3>
          <p className="text-sm my-3.5">
            Items you have clipped in flyers and your shopping list will be
            saved here.
          </p>
          <Link
            href="/flyers"
            className="text-sm border-2 border-sky-500 text-sky-500 py-2.5 px-5 rounded-sm font-medium shadow"
          >
            Start Browsing Flyers
          </Link>
        </div>
        <div className="hidden md:flex">
          <p className="text-sm text-center">
            Start building your shopping list either by{" "}
            <span className="font-bold">typing an item</span> or{" "}
            <span className="font-bold">clicking on one of these items</span>
          </p>
        </div>
      </div>
      <div className="hidden md:inline-block basis-3/5">
        <ShoppingListNotice/>
        <div className="mt-5">
          <h3 className="text-center text-base font-black">
            Recommended Items
          </h3>
          <div>
            <div className="flex justify-between mb-2">
              <h4 className="uppercase text-sm text-slate-500 font-black">Popular Items</h4>
              <button className="text-sm font-bold text-sky-500">+ Add all</button>
            </div>
            <div>
              <ul className="flex flex-wrap items-stretch justify-center">
                <li className="flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/AppleIcon.svg"
                      alt="Apple"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Apple</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Bacon.png"
                      alt="Bacon"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Bacon</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Bananas.png"
                      alt="Bananas"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Bananas</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/BreadIcon.svg"
                      alt="Bread"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Bread</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/BroccoliIcon.svg"
                      alt="Broccoli"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Broccoli</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/ButterIcon.svg"
                      alt="Butter"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Butter</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Cereal.png"
                      alt="Cereal"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Cereal</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/CheeseIcon.svg"
                      alt="Cheese"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Cheese</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Chicken.png"
                      alt="Chicken"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Chicken</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Cucumber.png"
                      alt="Cucumber"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Cucumber</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/EggIcon.svg"
                      alt="Eggs"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Eggs</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Lettuce.png"
                      alt="Lettuce"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Lettuce</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/MilkIcon.svg"
                      alt="Milk"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Milk</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/ToiletPaper.png"
                      alt="Toilet paper"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Toilet Paper</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/Tomato.png"
                      alt="Tomato"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Tomato</span>
                </li>
                <li className=" flex flex-col items-center justify-center">
                  <button className="flex justify-center items-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12 h-14">
                    <Image
                      src="/IceCreamIcon.svg"
                      alt="Yogurt"
                      width={80}
                      height={80}
                      // style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <span className="text-sm capitalize">Yogurt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListResult;
