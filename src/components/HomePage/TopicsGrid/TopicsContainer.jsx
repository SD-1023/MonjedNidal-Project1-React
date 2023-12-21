import { useContext, useEffect } from "react";
import { httpRequest } from "../../../apiFetches";
import { SearchFilterContext } from "../../Contexts/SearchFilterContext";
import TopicCard from "./TopicCard";

function TopicsContainer(props) {
  const { topicsData, setTopicsData } = props;
  const { searchTerm, sortCriteria, selectedFilter } =
    useContext(SearchFilterContext);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await httpRequest(`/list?phrase=${searchTerm}`).then(
        (updatedTopicsData) => {
          setTopicsData(updatedTopicsData);
        }
      );
    }, 300);

    return () => clearTimeout(timeoutId);
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
      <h2 className="topicsTitle container">
        <span id="topicsCounter">
          {sortedData[0] ? sortedData.length : "No"}
        </span>{" "}
        Web Topics Found
      </h2>
      <section className="topics container" id="topicsContainer">
        {sortedData &&
          sortedData.map((topic) => <TopicCard topic={topic} key={topic.id} />)}
      </section>
    </>
  );
}

export default TopicsContainer;
