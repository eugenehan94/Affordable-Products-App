import { useState, useEffect, useContext } from "react";
import Loader from "@/components/_shared/Loader";
import SearchNavbar from "@/components/_shared/SearchNavbar";
import SearchSidebarDesktop from "@/components/_shared/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/_shared/SearchSidebarMobile";
import FlyerResults from "@/components/flyers/FlyerResults";
import DownloadAppButton from "@/components/_shared/DownloadAppButton";

import { UserContext } from "@/context/context";

const Flyers = () => {
  const [flyersData, setFlyersData] = useState([]);
  const [isFlyersLoading, setIsFlyersLoading] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useContext(UserContext);
  const { userQuery, setUserQuery } = useContext(UserContext);
  const { isResultsLoading, setIsResultsLoading } = useContext(UserContext);

  useEffect(() => {
    setIsFlyersLoading(true);
    //NOTE: Setting to empty string because this page doesn't require any input initially
    setUserQuery("");
    fetch("/api/getFlippFlyers")
      .then((res) => res.json())
      .then((data) => {
        setFlyersData(data);
        setIsFlyersLoading(false);
      });
  }, []);

  if (isFlyersLoading || !flyersData) return <Loader />;

  return (
    <div>
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
      <FlyerResults flyersData={flyersData} />
      <DownloadAppButton />
    </div>
  );
};

export default Flyers;
