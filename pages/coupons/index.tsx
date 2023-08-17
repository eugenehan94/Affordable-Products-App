import { useState, useEffect, useContext } from "react";
import Loader from "@/components/_shared/Loader";
import SearchNavbar from "@/components/_shared/SearchNavbar";
import SearchSidebarDesktop from "@/components/_shared/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/_shared/SearchSidebarMobile";
import DownloadAppButton from "@/components/_shared/DownloadAppButton";
import CouponsNotice from "@/components/coupons/CouponsNotice";
import CouponsResult from "@/components/coupons/CouponsResult";

import { UserContext } from "@/context/context";

const Coupons = () => {
  const [couponsData, setCouponsData] = useState([]);
  const [isCouponsLoading, setIsCouponsLoading] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useContext(UserContext);
  const { userQuery, setUserQuery } = useContext(UserContext);
  const { isResultsLoading, setIsResultsLoading } = useContext(UserContext);

  useEffect(() => {
    setIsCouponsLoading(true);
    fetch("/api/getFlippCoupons")
      .then((res) => res.json())
      .then((data) => {
        setCouponsData(data);
        setIsCouponsLoading(false);
      });
  }, []);

  if (isCouponsLoading) {
    return <Loader />;
  }

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
      <div className="my-24 ml-2 md:ml-48 mr-2 md:px-4">
        <CouponsNotice />
        <CouponsResult couponsData={couponsData} />
      </div>
      <DownloadAppButton />
    </div>
  );
};

export default Coupons;
