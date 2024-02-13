import { createContext, useContext, useState } from "react";

const SearchFilterContext = createContext({
  searchTerm: "",
  sortCriteria: "",
  selectedFilter: "",
  setSearchTerm: () => {},
  setSortCriteria: () => {},
  setSelectedFilter: () => {},
});
const SearchFilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const updateSearchTerm = (newTerm) => setSearchTerm(newTerm);
  const updateSortCriteria = (newCriteria) => setSortCriteria(newCriteria);
  const updateSelectedFilter = (newFilter) => setSelectedFilter(newFilter);

  const contextValue = {
    searchTerm,
    sortCriteria,
    selectedFilter,
    setSearchTerm: updateSearchTerm,
    setSortCriteria: updateSortCriteria,
    setSelectedFilter: updateSelectedFilter,
  };

  return (
    <SearchFilterContext.Provider value={contextValue}>
      {children}
    </SearchFilterContext.Provider>
  );
};

const useSearchContext = () => {
  return useContext(SearchFilterContext);
};

export { useSearchContext, SearchFilterProvider };
