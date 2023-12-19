import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/filterSearch/filterSearchSlice";
import {
  SearchContainer,
  FilterAndIconWrap,
  SearchIcon,
  SearchInput,
} from "./FilterSearch.styled";

export default function FilterSearch() {
  const dispatch = useDispatch();

  const handleFilterSearch = (e) => {
    const { value } = e.currentTarget;

    dispatch(filterSearch(value.toLowerCase().trim()));
  };

  return (
    <SearchContainer>
      <FilterAndIconWrap>
        <SearchInput
          id="searchInput"
          type="text"
          onChange={handleFilterSearch}
          placeholder="Enter name"
        />
        <SearchIcon />
      </FilterAndIconWrap>
    </SearchContainer>
  );
}
