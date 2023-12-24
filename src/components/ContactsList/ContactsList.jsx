import ContactEl from "../ContactEl";
import { ContactsUl } from "./ContactsList.styled";

export default function ContactsList({ openModal, setIsAdding, setId }) {
  return (
    <>
      <ContactsUl>
        <ContactEl
          openModal={openModal}
          setIsAdding={setIsAdding}
          setId={setId}
        />
      </ContactsUl>
    </>
  );
}
