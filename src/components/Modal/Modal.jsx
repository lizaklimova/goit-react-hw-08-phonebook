import { createPortal } from "react-dom";
import ContactsForm from "components/ContactsForm";
import CloseBtn from "components/CloseBtn/CloseBtn";
import { MainContainer } from "components/App/App.styled";
import { ModalBackdrop, ModalWin } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ closeModal, isOpen, action }) => {
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  return createPortal(
    <ModalBackdrop
      className={isOpen ? "is-visible" : "is-hidden"}
      onClick={handleBackdropClose}
    >
      <MainContainer onClick={handleBackdropClose}>
        <ModalWin className={isOpen ? "is-visible" : "is-hidden"}>
          <CloseBtn closeFn={closeModal} />
          <ContactsForm closeModal={closeModal} action={action} />
        </ModalWin>
      </MainContainer>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
