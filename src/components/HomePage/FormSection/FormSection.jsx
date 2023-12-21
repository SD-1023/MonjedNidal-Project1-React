import { useEffect, useState } from "react";
import InputField from "./InputField";
import Select from "./Select";

let filters = [];

function FormSection(props) {
  const { topicsData } = props;
  const [filteredTopics, setFilteredTopics] = useState(topicsData);

  useEffect(() => {
    function getAndLoadCategoris(topics) {
      let categories = [];
      if (topics[0]) {
        topics.forEach((topic) => {
          if (!categories.includes(topic.category)) {
            categories.push(topic.category);
          }
        });
        filters = categories.map((cate) => {
          return { option: cate, value: cate };
        });
      }
    }
    getAndLoadCategoris(topicsData);
  }, [topicsData]);

  return (
    <section className="container">
      <form className="inputSection d-flex box-shadow rounded">
        <InputField
          filteredTopics={filteredTopics}
          setFilteredTopics={setFilteredTopics}
          topicsData={topicsData}
        />
        <div className="selectsContainer d-flex">
          <Select
            label="Sort by:"
            className="sortInput"
            id="sortSelect"
            defaultHidden={true}
            options={[
              { option: "Topic Title", value: "topic" },
              { option: "Author Name", value: "name" },
            ]}
            type="sort"
          />
          <Select
            label="Filter by:"
            className="filterInput"
            id="filterSelect"
            defaultHidden={false}
            options={filters}
            type="filter"
          />
        </div>
      </form>
    </section>
  );
}

export default FormSection;
