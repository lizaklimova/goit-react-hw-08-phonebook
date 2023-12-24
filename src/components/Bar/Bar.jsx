import FilterSearch from "components/FilterSearch";
import { BarDiv, AddContactBtn } from "./Bar.styled";
const Bar = ({ openModal, setIsAdding }) => {
  return (
    <BarDiv>
      <AddContactBtn
        type="button"
        onClick={() => {
          openModal();
          setIsAdding(true);
        }}
      >
        add contact
      </AddContactBtn>
      <FilterSearch />
    </BarDiv>
  );
};
export default Bar;
