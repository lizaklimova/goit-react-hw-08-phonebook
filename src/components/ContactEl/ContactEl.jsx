import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilterSearch } from "../../redux/filterSearch/selectors";
import { deleteContact } from "../../redux/contacts/operations";

import {
  ContactLi,
  ContactWrapper,
  ContactUser,
  ContactInfoBlock,
  ContactEditBtn,
  EditIcon,
  ContactDeleteBtn,
  DeleteIcon,
  ContactInfoName,
  ContactInfoTel,
  NoContactsFoundMsg,
} from "./ContactEl.styled";

export default function ContactEl() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter);
  });

  return (
    <>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }, i) => (
          <ContactLi key={id}>
            <ContactUser />
            <ContactWrapper>
              <ContactInfoBlock>
                <ContactInfoName>{name}</ContactInfoName>
                <ContactInfoTel>{number}</ContactInfoTel>
              </ContactInfoBlock>
            </ContactWrapper>
            <div>
              <ContactEditBtn type="button">
                <EditIcon />
              </ContactEditBtn>

              <ContactDeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon size={20} />
              </ContactDeleteBtn>
            </div>
          </ContactLi>
        ))
      ) : (
        <NoContactsFoundMsg>
          No contacts found on filter<span>{filter}</span>
        </NoContactsFoundMsg>
      )}
    </>
  );
}
