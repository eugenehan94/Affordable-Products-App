import Image from "next/image";
import Link from "next/link";

const ShoppingList = () => {
  return (
    <div className="px-4 mt-14 md:flex" id="shopping_list">
      <div>
        <p className="text-center md:text-left text-3xl pb-5 md:w-9/12 md:mx-auto text-gray-700">
          Stay organized with your{" "}
          <span className="font-bold">digital Shopping List.</span>
        </p>
        <p className="w-9/12 mx-auto text-center md:text-left mb-5 text-gray-700">
          Clip deals directly to your shopping list or add your own items. Flipp
          will instantly find deals for the items on your list. Download the{" "}
          <span className="underline">Flipp App</span> to have your list on hand
          while you shop.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center md:w-9/12 md:mx-auto">
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/MilkIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/EggIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/ButterIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/CheeseIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/BreadIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/AppleIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/BroccoliIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5 w-6/12">
            <Image
              src="/IceCreamIcon.svg"
              alt="Flipp"
              width={35}
              height={35}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          {/* <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm">
            Create a Shopping List
          </button> */}
          <Link
            href="/shopping_list"
            className="flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded w-48 h-11 my-5 text-sm"
          >
            Create a Shopping List
          </Link>
        </div>
      </div>
      <div>
        {/* https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724 */}
        <Image
          src="/WeeklyAdsPicture.jpeg"
          alt="Weekly Ads"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ShoppingList;
