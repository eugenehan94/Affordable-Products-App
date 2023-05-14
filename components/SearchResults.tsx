import { useRouter } from "next/router";

const SearchResults = ({ data }: any) => {
  console.log("Search Results data: ", data);
  const router = useRouter();
  // @TODO: Find better name for next 2 lines
  const query = router.query.productInput?.toString();
  // const query2 = query?.toUpperCase();
  return (
    <div className="my-20 px-2.5 md:px-8 ">
      <h2 className="text-center md:text-left uppercase text-base font-bold my-3">{query} - ONLINE ITEMS</h2>
      <div className="grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-3">
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
