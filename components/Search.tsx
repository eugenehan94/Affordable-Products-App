const Search = () => {
  return (
    <div className="px-4 my-16 flex justify-center items-center" id="search">
      <div className="w-10/12 md:w-3/5">
        <p className="text-3xl text-center my-10 text-gray-700">
          <span className="font-bold">Search</span> for items, brands, and
          stores to quickly find what you need.
        </p>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Try searching for 'eggs'"
            className="pl-2.5 pt-1.5 pr-1.5 pb-1.5 text-2xl border-gray-400 border-solid border-2 rounded"
          ></input>
          <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded p-1 mt-1">
            Search Flipp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
