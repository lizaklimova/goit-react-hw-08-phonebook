import FilterSearch from "components/FilterSearch";
import { BarDiv, AddContactBtn } from "./Bar.styled";
const Bar = ({ openModal }) => {
  return (
    <BarDiv>
      <AddContactBtn type="button" onClick={openModal}>
        add contact
      </AddContactBtn>
      <FilterSearch />
    </BarDiv>
  );
};
export default Bar;
