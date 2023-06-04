import { useContext } from "react";
import SearchNavbar from "@/components/SearchNavbar";
import SearchSidebarDesktop from "@/components/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/SearchSidebarMobile";
import DownloadAppButton from "@/components/DownloadAppButton";
import ShoppingListResult from "@/components/ShoppingListResult";

import { UserContext } from "@/context/context";

const ShoppingList = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(UserContext);
  const { userQuery, setUserQuery } = useContext(UserContext);
  const { isResultsLoading, setIsResultsLoading } = useContext(UserContext);
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
        <ShoppingListResult />
      </div>
      <DownloadAppButton />
    </div>
  );
};

export default ShoppingList;
