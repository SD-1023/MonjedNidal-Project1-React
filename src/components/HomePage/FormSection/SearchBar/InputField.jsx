import { useSearchContext } from "../../../Contexts/SearchFilterContext";
import { SearchBar, SearchIcon, StyledInputField } from "./InputFieldStyles";
function InputField() {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const handleChange = (event) => setSearchTerm(event.target.value);

  return (
    <SearchBar>
      <SearchIcon name="search-outline"></SearchIcon>
      <StyledInputField
        type="text"
        placeholder="Search the website..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchBar>
  );
}

export default InputField;
