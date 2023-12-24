import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "notifications/notiflixInit";
import { addContact, editContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import {
  ContactsFormEl,
  ContactsNameInput,
  PersonNameIcon,
  PersonTelIcon,
  ContactsNumberInput,
  SubmitBtn,
} from "./ContactsForm.styled";

export default function ContactsForm({ closeModal, action, id }) {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const onEscClose = (e) => {
      if (e.code === "Escape") closeModal();
    };

    window.addEventListener("keydown", onEscClose);

    return () => {
      window.removeEventListener("keydown", onEscClose);
    };
  }, [closeModal]);

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;
    const body = { name: name.value, number: number.value };

    checkExistingContact(number.value)
      ? info(`Number ${number.value} already exists`)
      : dispatch(
          action === addContact
            ? addContact(body)
            : editContact({
                id,
                body,
              })
        );

    closeModal();
    e.currentTarget.reset();
  };

  const checkExistingContact = (value) => {
    return contacts.find((contact) => contact.number === value);
  };

  const value = contacts.find((el) => el.id === id);

  return (
    <>
      <ContactsFormEl autoComplete="off" onSubmit={onSubmit}>
        <div style={{ position: "relative" }}>
          <ContactsNameInput
            type="text"
            name="name"
            placeholder={action === editContact ? value.name : "Full Name"}
            required
          />
          <PersonNameIcon />
        </div>

        <div style={{ position: "relative" }}>
          <ContactsNumberInput
            type="tel"
            name="number"
            placeholder={action === editContact ? value.number : "123-456-78"}
            title="Please, enter valid format of number. Ex: (123-45-67)"
            required
          />
          <PersonTelIcon />
        </div>
        <SubmitBtn type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          Add contact
        </SubmitBtn>
      </ContactsFormEl>
    </>
  );
}
