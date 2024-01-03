import { useEffect } from "react";
import { httpRequest } from "../../../apiFetches";
import { useSearchContext } from "../../Contexts/SearchFilterContext";
import TopicCard from "./TopicCard/TopicCard";
import { TopicsTitle, TopicsGrid } from "./TopicsContainerStyles";

function TopicsContainer({ topicsData, setTopicsData }) {
  const { searchTerm, sortCriteria, selectedFilter } = useSearchContext();

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await httpRequest(`/list?phrase=${searchTerm}`).then(
        (updatedTopicsData) => {
          setTopicsData(updatedTopicsData);
        },
        300
      );
      return () => clearTimeout(timeoutId);
    });
  }, [searchTerm, setTopicsData]);

  const filteredData = topicsData.filter((item) => {
    if (selectedFilter) {
      return item.category === selectedFilter;
    } else {
      return true;
    }
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortCriteria) {
      return a[sortCriteria].localeCompare(b[sortCriteria]);
    }
    return 0;
  });

  return (
    <>
      <TopicsTitle>
        {sortedData[0] ? `"${sortedData.length}"` : "No"} Web Topics Found
      </TopicsTitle>
      <TopicsGrid>
        {sortedData &&
          sortedData.map((topic) => <TopicCard topic={topic} key={topic.id} />)}
      </TopicsGrid>
    </>
  );
}

export default TopicsContainer;
