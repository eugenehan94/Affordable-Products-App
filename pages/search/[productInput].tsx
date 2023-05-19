import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import SearchNavbar from "@/components/SearchNavbar";
import SearchResults from "@/components/SearchResults";
import SearchSidebarDesktop from "@/components/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/SearchSidebarMobile";
import DownloadAppButton from "@/components/DownloadAppButton";

const ProductInput = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // NOTE: This useState is for the input in SearchNavbar
  const [userQuery, setUserQuery] = useState(null);
  // "isResultsLoading" is for the loading state of the SearchResults component only
  const [isResultsLoading, setIsResultsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    // https://nextjs.org/docs/pages/api-reference/functions/use-router#router-object
    // "isReady" - when refreshed the router is initially empty, this will prevent the
    // initial value from being read. As per docs, only use in useEffect. Thus, didn't use
    // getServerSideProps
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
      <SearchSidebarDesktop
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <SearchNavbar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
      />
      <div className="mt-20"></div>
      <SearchResults data={data} />
      <DownloadAppButton />
    </div>
  );
};

export default ProductInput;
