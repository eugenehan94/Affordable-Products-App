import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SearchResults = ({
  data,
  isResultsLoading,
  setIsResultsLoading,
  setData,
  userQuery,
}: {
  data: any;
  isResultsLoading: boolean;
  setIsResultsLoading: Function;
  setData: Function;
  userQuery: string;
}) => {
  console.log("Search Results data: ", data);
  const router = useRouter();
  const query = router.query.productInput?.toString();

  useEffect(() => {
    if (isResultsLoading === true) {
      fetch("/api/getFlippItems", {
        method: "POST",
        body: `${userQuery}`,
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsResultsLoading(false);
        });
    }
  }, [isResultsLoading]);

  if (isResultsLoading) {
    return (
      <div className="flex justify-center my-20 px-2.5 md:px-8 md:ml-44">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 mr-2 mt-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center my-20 px-2.5 md:px-8 md:ml-44">
        <Image
          src="/NoSearchResults.svg"
          alt="No Search Results"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "200px", height: "200px" }}
        />
        <p>Couldn't find any results for "{userQuery}"</p>
      </div>
    );
  }
  return (
    <div className="my-20 px-2.5 md:px-8 md:ml-44">
      <h2 className="uppercase text-base font-bold my-3">
        {query} - ONLINE ITEMS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product: any) => (
          <div className="relative p-3 border border-gray-200 rounded-lg shadow h-64 w-52 mb-1.5">
            <img
              src={product.storeLogo}
              alt="store logo"
              className="absolute top-1 right-1 w-18 h-6"
            />
            <img src={product.image} alt={product.name} />
            <div>
              <p className="text-xl font-bold">${product.price}</p>
              {product.discount && (
                <p className="text-xs text-red-600 font-bold">
                  Save: ${product.discount}
                </p>
              )}
            </div>
            <p className="text-sm">{product.name}</p>
            <p className="text-sm">{product.nameSecond}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
