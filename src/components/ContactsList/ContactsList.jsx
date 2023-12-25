import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilterSearch } from "../../redux/filterSearch/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { sortContacts } from "../../redux/contacts/slice";
import ContactEl from "../ContactEl";
import SortButton from "components/SortButton";
import { ContactsUl } from "./ContactsList.styled";
import { NoContactsFoundMsg } from "components/ContactEl/ContactEl.styled";

export default function ContactsList({ openModal, setIsAdding }) {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name && name.toLowerCase().trim().includes(filter);
  });

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSorting = () => {
    const sortedContacts = [...filteredContacts].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    dispatch(sortContacts(sortedContacts));
  };

  return (
    <>
      <SortButton handleSorting={handleSorting} />

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
              deleteContact={handleDeleteContact}
            />
          ))
        ) : (
          <NoContactsFoundMsg>
            No contacts found on filter <span>{filter}</span>
          </NoContactsFoundMsg>
        )}
      </ContactsUl>
    </>
  );
}
