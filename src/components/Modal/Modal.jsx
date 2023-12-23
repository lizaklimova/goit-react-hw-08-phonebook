import { IoMdClose } from "react-icons/io";
import ContactsForm from "components/ContactsForm";
import { MainContainer } from "components/App/App.styled";
import { ModalBackdrop, ModalWin, CloseModalBtn } from "./Modal.styled";

const Modal = ({ closeModal, isOpen }) => {
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  return (
    <ModalBackdrop className={isOpen ? "is-visible" : "is-hidden"}>
      <MainContainer onClick={handleBackdropClose}>
        <ModalWin className={isOpen ? "is-visible" : "is-hidden"}>
          <CloseModalBtn type="button" onClick={closeModal}>
            <IoMdClose size={30} color={"black"} />
          </CloseModalBtn>
          <ContactsForm closeModal={closeModal} />
        </ModalWin>
      </MainContainer>
    </ModalBackdrop>
  );
};

export default Modal;
