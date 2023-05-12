import Image from "next/image";

const SearchResults = ({ data }: any) => {
  console.log("Search Results data: ", data);
  return (
    <div className="p-1">
      <h2>Title HERE</h2>
      {data.map((product: any) => (
        <div className="relative p-3 border border-gray-900 rounded-lg shadow">
          {/* <Image
            src={product.image}
            alt=""
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          /> */}
          <img
            src={product.storeLogo}
            alt="store logo"
            className="absolute -top-2 -left-2 w-18 h-4"
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
  );
};

export default SearchResults;
