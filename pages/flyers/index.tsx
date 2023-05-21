// @TODO: Other pages may share props - could move to higher components
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchNavbar from "@/components/SearchNavbar";
import SearchSidebarDesktop from "@/components/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/SearchSidebarMobile";
import FlyerResults from "@/components/FlyerResults";
import DownloadAppButton from "@/components/DownloadAppButton";
import Loader from "@/components/Loader";

const Flyers = () => {
  const [flyersData, setFlyersData] = useState([]);
  const [isFlyersLoading, setIsFlyersLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // @TODO: Props - appear elsewhere - could move to higher component tree
  // NOTE: This useState is for the input in SearchNavbar
  const [userQuery, setUserQuery] = useState("");
  // "isResultsLoading" is for the loading state of the SearchResults component only
  const [isResultsLoading, setIsResultsLoading] = useState(false);
  // @TODO: See if we need to keep in useEffect - if not useServerSideProps (note router.ready)
  useEffect(() => {
    setIsFlyersLoading(true);
    fetch("/api/getFlippFlyers")
      .then((res) => res.json())
      .then((data) => {
        console.log("RES data: ", data);
        setFlyersData(data);
        setIsFlyersLoading(false);
      });
  }, []);

  if (isFlyersLoading || !flyersData) return <Loader />;

  return (
    <div>
      {/* @TODO: Warning in console is cause by this component - Investigate */}
      <SearchNavbar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        isResultsLoading={isResultsLoading}
        setIsResultsLoading={setIsResultsLoading}
      />
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
      <FlyerResults flyersData={flyersData}/>
      <DownloadAppButton />
    </div>
  );
};

export default Flyers;
