import Image from "next/image";
import Link from "next/link";

const SearchSidebar = ({ setSidebarOpen, sidebarOpen }: any) => {
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-screen z-50 flex">
      <div className="w-2/4 h-screen bg-white flex flex-col">
        <div className="flex justify-center items-center mb-5 mt-2">
          <Link href="/" onClick={() => handleClick()}>
            <Image
              src="/flippLogo.svg"
              alt="Flipp"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <a className="cursor-pointer hover:bg-gray-100 text-lg leading-8">
          <div className="flex items-center pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            Favourite
          </div>
        </a>
        <a className="cursor-pointer hover:bg-gray-100 text-lg leading-8">
          <div className="flex items-center pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            Flyers
          </div>
        </a>
        <a className="cursor-pointer hover:bg-gray-100 text-lg leading-8">
          <div className="flex items-center pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Coupons{" "}
          </div>
        </a>
        <div className="pl-6 mt-5 overflow-y-auto flex flex-col">
          <h2 className="uppercase text-xs">Flyer</h2>
          <a>All Flyers</a>
          <a>Groceries</a>
          <a>Restaurants</a>
          <a>Home & Garden</a>
          <a>Pharmacy</a>
          <a>General</a>
          <a>Merchandise</a>
          <a>Electronics</a>
          <a>Baby & Kids</a>
          <a>Fashion</a>
          <a>Automotive</a>
          <a>Sporting</a>
          <a>Goods</a>
          <a>Pets</a>
          <a>Office</a>
          <a>Specialty</a>
        </div>
      </div>
      <div
        className="w-2/4 bg-black opacity-50 hover:cursor-pointer"
        onClick={() => {
          handleClick();
        }}
      ></div>
    </div>
  );
};

export default SearchSidebar;
