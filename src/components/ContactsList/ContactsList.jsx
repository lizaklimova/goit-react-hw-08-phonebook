import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilterSearch } from "../../redux/filterSearch/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import ContactEl from "../ContactEl";
import { ContactsUl } from "./ContactsList.styled";
import { NoContactsFoundMsg } from "components/ContactEl/ContactEl.styled";

export default function ContactsList({ openModal, setIsAdding, setId }) {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterSearch);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(({ name }) => {
    return name && name.toLowerCase().trim().includes(filter);
  });

  return (
    <ContactsUl>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactEl
            key={id}
            id={id}
            name={name}
            number={number}
            openModal={openModal}
            setIsAdding={setIsAdding}
            setId={setId}
            deleteContact={handleDeleteContact}
          />
        ))
      ) : (
        <NoContactsFoundMsg>
          No contacts found on filter <span>{filter}</span>
        </NoContactsFoundMsg>
      )}
    </ContactsUl>
  );
}
