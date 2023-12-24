import { CloseButton } from "./CloseBtn.styled";
import { IoMdClose } from "react-icons/io";

const CloseBtn = ({ closeFn }) => {
  return (
    <CloseButton type="button" onClick={() => closeFn()}>
      <IoMdClose size={30} color={"black"} />
    </CloseButton>
  );
};

export default CloseBtn;
