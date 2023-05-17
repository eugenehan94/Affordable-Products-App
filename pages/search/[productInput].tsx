import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import SearchNavbar from "@/components/SearchNavbar";
import SearchResults from "@/components/SearchResults";
import SearchSidebarDesktop from "@/components/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/SearchSidebarMobile";

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

  if (isLoading || !data) return <Loader />;
  const router = useRouter();
  return (
    <div>
      {sidebarOpen && (
        <SearchSidebarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <SearchSidebarDesktop />
      <SearchNavbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="mt-20"></div>
      <SearchResults data={data} />
    </div>
  );
};

export default ProductInput;
