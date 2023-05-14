import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchNavbar from "@/components/SearchNavbar";
import SearchResults from "@/components/SearchResults";
import SearchSidebar from "@/components/SearchSidebar";

const ProductInput = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  console.log("sidebarOpen: ", sidebarOpen);
  return (
    <div>
      {sidebarOpen && (
        <SearchSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <SearchNavbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="mt-20"></div>
      <SearchResults data={data} />
    </div>
  );
};

export default ProductInput;
