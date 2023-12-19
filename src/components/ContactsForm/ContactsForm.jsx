import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { info } from "notifications/notiflixInit";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import {
  ContactsFormEl,
  ContactsNameInput,
  Label,
  ContactsNumberInput,
  SubmitBtn,
} from "./ContactsForm.styled";

export default function ContactsForm({ closeModal }) {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const idName = nanoid();
  const idNumber = nanoid();

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

    checkExistingContact(number.value)
      ? info(`Number ${number.value} already exists`)
      : dispatch(addContact({ name: name.value, phone: number.value }));

    closeModal();
    e.currentTarget.reset();
  };

  const checkExistingContact = (value) => {
    return contacts.find((contact) => contact.phone === value);
  };

  return (
    <>
      <ContactsFormEl autoComplete="off" onSubmit={onSubmit}>
        <Label htmlFor={idName}>Name</Label>
        <ContactsNameInput
          id={idName}
          type="text"
          name="name"
          placeholder="Full name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <Label htmlFor={idNumber}>Phone</Label>
        <ContactsNumberInput
          id={idNumber}
          type="tel"
          name="number"
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Please, enter valid format of number. Ex: (123-45-67)"
          required
        />
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
