import Image from "next/image";
const SearchSidebar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 w-screen h-screen p-4 bg-white flex flex-col">
      <Image
        src="/flippLogo.svg"
        alt="Flipp"
        width={60}
        height={60}
        style={{ width: "auto", height: "auto" }}
      />
      <h1>X Button</h1>
      <a>Favourite</a>
      <a>Flyers</a>
      <a>Coupons</a>
    </div>
  );
};

export default SearchSidebar;
