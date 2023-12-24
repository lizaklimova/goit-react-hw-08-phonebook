import { LiaSortAlphaDownSolid } from "react-icons/lia";
import { ContactsSortBtn } from "./SortButton.styled";

const SortButton = ({ handleSorting }) => {
  return (
    <ContactsSortBtn type="button" onClick={handleSorting}>
      <LiaSortAlphaDownSolid /> Sort alphabetically
    </ContactsSortBtn>
  );
};

export default SortButton;
