import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchNavbar from "@/components/SearchNavbar";
import SearchResults from "@/components/SearchResults";

const ProductInput = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/getFlippItems")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (isLoading || !data) return <p>Loading...</p>;
  const router = useRouter();
  console.log("ProductInput Router: ", router);
  return (
    <div>
      <SearchNavbar />
      <div className="mt-20"></div>
      <SearchResults data={data}/>
    </div>
  );
};

export default ProductInput;
