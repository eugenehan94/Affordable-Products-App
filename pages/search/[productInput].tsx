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
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    // https://nextjs.org/docs/pages/api-reference/functions/use-router#router-object
    // "isReady" - when refreshed the router is initially empty, this will prevent the
    // initial value from being read. As per docs, only use in useEffect. Thus, didn't use
    // getServerSideProps
    console.log("router.isReady: ", router.isReady);
    if (router.isReady) {
      fetch("/api/getFlippItems", {
        method: "POST",
        body: `${router.query.productInput}`,
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
          setLoading(false);
        });
    }
  }, [router.isReady]);

  if (isLoading || !data) return <Loader />;

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
