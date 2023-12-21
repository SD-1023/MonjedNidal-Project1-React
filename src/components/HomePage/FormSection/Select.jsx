import React, { useContext } from "react";
import { SearchFilterContext } from "../../Contexts/SearchFilterContext";

function Select(props) {
  let { label, options, className, id, defaultHidden, type } = props;
  const { sortCriteria, selectedFilter, setSortCriteria, setSelectedFilter } =
    useContext(SearchFilterContext);

  const handleChange = (event) => {
    if (type === "sort") {
      setSortCriteria(event.target.value);
    } else if (type === "filter") {
      if (event.target.value !== "default") {
        setSelectedFilter(event.target.value);
      } else {
        setSelectedFilter("");
      }
    }
  };

  return (
    <div className={`selectInput ${className}`}>
      <label>{label}</label>
      <select
        className="styled-select text-overflow"
        value={type === "sort" ? sortCriteria : selectedFilter}
        onChange={handleChange}
        id={id}
      >
        <option value="default" hidden={defaultHidden}>
          Default
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
