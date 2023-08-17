import { useContext } from "react";
import SearchNavbar from "@/components/_shared/SearchNavbar";
import SearchSidebarDesktop from "@/components/_shared/SearchSidebarDesktop";
import SearchSidebarMobile from "@/components/_shared/SearchSidebarMobile";
import DownloadAppButton from "@/components/_shared/DownloadAppButton";
import ShoppingListResult from "@/components/shopping_list/ShoppingListResult";

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
