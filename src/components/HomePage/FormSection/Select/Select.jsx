import { useSearchContext } from "../../../Contexts/SearchFilterContext";
import { SelectContainer, SelectLabel, StyledSelect } from "./SelectStyles";
function Select(props) {
  let { label, options, noborder, id, defaultHidden, type } = props;
  const { sortCriteria, selectedFilter, setSortCriteria, setSelectedFilter } =
    useSearchContext();

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
    <SelectContainer noborder={noborder}>
      <SelectLabel>{label}</SelectLabel>
      <StyledSelect
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
      </StyledSelect>
    </SelectContainer>
  );
}

export default Select;
