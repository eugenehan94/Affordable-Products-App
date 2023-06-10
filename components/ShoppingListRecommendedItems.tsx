import Image from "next/image";

const ShoppingListRecommendedItems = () => {
    return(        <div className="mt-5">
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
  </div>)
}

export default ShoppingListRecommendedItems;