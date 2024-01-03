import { useEffect, useState } from "react";
import { Container } from "../../GlobalComponents/GlobalStyles";
import InputField from "./SearchBar/InputField";
import Select from "./Select/Select";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-top: 0.7rem;
  position: relative;
  font-weight: 500;
  height: 3.5rem;
  background-color: var(--white);
  color: var(--body-text);
  box-shadow: var(--box-shadow);
  border-radius: 10px;

  @media (max-width: 632px) {
    flex-wrap: wrap;
    height: fit-content;
  }
`;

const SelectsContainer = styled.div`
  display: flex;
  width: 40%;

  @media (max-width: 632px) {
    width: 100%;
  }
`;

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
    <Container>
      <Form>
        <InputField
          filteredTopics={filteredTopics}
          setFilteredTopics={setFilteredTopics}
          topicsData={topicsData}
        />
        <SelectsContainer>
          <Select
            label="Sort by:"
            id="sortSelect"
            defaultHidden={true}
            options={[
              { option: "Topic Title", value: "topic" },
              { option: "Author Name", value: "name" },
            ]}
            type="sort"
            noBorder={false}
          />
          <Select
            label="Filter by:"
            className="filterInput"
            id="filterSelect"
            defaultHidden={false}
            options={filters}
            type="filter"
            noBorder={true}
          />
        </SelectsContainer>
      </Form>
    </Container>
  );
}

export default FormSection;
