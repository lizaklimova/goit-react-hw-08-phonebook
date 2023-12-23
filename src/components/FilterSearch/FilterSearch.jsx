import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/filterSearch/slice";
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
        <SearchIcon />
        <SearchInput
          id="searchInput"
          type="text"
          onChange={handleFilterSearch}
          placeholder="Enter name"
        />
      </FilterAndIconWrap>
    </SearchContainer>
  );
}
