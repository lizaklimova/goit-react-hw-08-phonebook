import ContactEl from '../ContactEl';
import { ContactsUl } from './ContactsList.styled';

export default function ContactsList() {
  return (
    <>
      <ContactsUl>
        <ContactEl />
      </ContactsUl>
    </>
  );
}
