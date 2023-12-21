import React, { useContext } from "react";
import { SearchFilterContext } from "../../Contexts/SearchFilterContext";

function InputField() {
  const { searchTerm, setSearchTerm } = useContext(SearchFilterContext);

  const handleChange = (event) => setSearchTerm(event.target.value);

  return (
    <div className="searchSection d-flex justify-center">
      <ion-icon class="searchIcon icon" name="search-outline"></ion-icon>
      <input
        className="inputField"
        type="text"
        placeholder="Search the website..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputField;
