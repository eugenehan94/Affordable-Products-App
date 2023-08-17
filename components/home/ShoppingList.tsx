import Image from "next/image";
import Link from "next/link";

const shoppingListIconsData = [
  {
    imageSrc: "/MilkIcon.svg",
    imageAlt: "Milk icon",
  },
  {
    imageSrc: "/EggIcon.svg",
    imageAlt: "Eggs icon",
  },
  {
    imageSrc: "/ButterIcon.svg",
    imageAlt: "Butter icon",
  },
  {
    imageSrc: "/CheeseIcon.svg",
    imageAlt: "Cheese icon",
  },
  {
    imageSrc: "/BreadIcon.svg",
    imageAlt: "Bread icon",
  },
  {
    imageSrc: "/AppleIcon.svg",
    imageAlt: "Apple icon",
  },
  {
    imageSrc: "/BroccoliIcon.svg",
    imageAlt: "Broccoli icon",
  },
  {
    imageSrc: "/IceCreamIcon.svg",
    imageAlt: "Ice cream icon",
  },
];

const ShoppingList = () => {
  return (
    <div className="mt-14 lg:flex" id="shopping_list">
      <div>
        <p className="text-center lg:text-left text-3xl md:w-9/12 md:mx-auto text-gray-700">
          Stay organized with your{" "}
          <span className="font-bold">digital Shopping List.</span>
        </p>
        <p className="text-center lg:text-left w-9/12 mx-auto my-5 text-gray-700">
          Clip deals directly to your shopping list or add your own items. Flipp
          will instantly find deals for the items on your list. Download the{" "}
          <a
            href="https://app.flipp.com/"
            target="_blank"
            className="underline font-medium hover:cursor-pointer"
          >
            Flipp App
          </a>{" "}
          to have your list on hand while you shop.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 justify-items-center items-center md:w-9/12 md:mx-auto gap-y-5">
          {shoppingListIconsData.map((icon, index) => (
            <div key={index} className=" flex justify-center rounded-full shadow-md shadow-gray-400 p-2.5">
              <Image
                src={icon.imageSrc}
                alt={icon.imageAlt}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
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
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ShoppingList;
