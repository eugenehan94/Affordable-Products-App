import { useState, createContext } from "react";

export const UserContext = createContext<any>(null);

const Context = ({ children }: { children: any }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // NOTE: This useState is for the input in SearchNavbar
  const [userQuery, setUserQuery] = useState<string | undefined>(undefined);
  // "isResultsLoading" is for the loading state of the SearchResults component only
  const [isResultsLoading, setIsResultsLoading] = useState(false);
  return (
    <UserContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        userQuery,
        setUserQuery,
        isResultsLoading,
        setIsResultsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
