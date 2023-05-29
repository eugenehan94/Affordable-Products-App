import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchNavbar = ({
  setSidebarOpen,
  sidebarOpen,
  userQuery,
  setUserQuery,
  setIsResultsLoading,
  isResultsLoading
}: {
  setSidebarOpen: Function;
  sidebarOpen: boolean;
  userQuery?: string;
  setUserQuery: Function;
  setIsResultsLoading: Function;
  isResultsLoading?: boolean
}) => {
  const router = useRouter();
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const onSubmit = () => {
    const userQueryLowerCase = userQuery?.toString().toLowerCase().trim();
    const routerProductInputLowerCase = router.query.productInput
      ?.toString()
      .toLowerCase()
      .trim();
    if (
      userQueryLowerCase === routerProductInputLowerCase ||
      userQuery === ""
    ) {
      return;
    }
    setIsResultsLoading(true);
    // NOTE: Since not reloading full page - We need the url to change to user
    // search input
    router.push(`/search/${userQuery}`);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(e.target.value);
  };
  useEffect(() => {
    setUserQuery(router.query.productInput);
  }, [router.query.productInput]);

  return (
    <div className="relative z-40">
      <div className="fixed top-0 left-0 md:left-48 right-0 flex items-stretch bg-teal-400 h-20">
        <div
          className="flex items-center w-auto hover:cursor-pointer pl-2.5 pr-3 md:hidden"
          onClick={() => handleClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#ffffff"
            className="w-9 h-9 mr-1"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <Image
            src="/flippLogoWhite.svg"
            alt="Flipp"
            width={50}
            height={50}
            // style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex w-full md:justify-between md:ml-2">
          <div className="flex items-center flex-1 max-w-md">
            <input
              type="text"
              value={userQuery}
              onChange={handleInput}
              placeholder="Search flyers or items"
              className="outline-none border border-solid border-slate-300 text-sm pr-1.5 pl-2.5 py-2 w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 mx-1.5 cursor-pointer text-gray-800"
              onClick={() => {
                onSubmit();
              }}
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <button className="md:hidden bg-sky-600 text-white w-20 h-7 font-bold text-xs mx-1 rounded">
                Get App
              </button>
            </div>
            <div className="hidden md:flex items-center mr-3 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 cursor-pointer text-gray-800"
              >
                <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>

              <span className="cursor-pointer hover:underline">
                About Flipp
              </span>
            </div>
            <div className="flex items-center mr-3 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 cursor-pointer  text-gray-800"
              >
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="hidden md:inline-block hover:underline cursor-pointer">
                Sign In
              </span>
            </div>
            <div className="flex items-center mr-3 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 cursor-pointer text-gray-800"
              >
                <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="hidden md:inline-block hover:underline cursor-pointer">
                Shopping List
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
