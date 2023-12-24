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
} from "./ContactEl.styled";

export default function ContactEl({
  id,
  name,
  number,
  openModal,
  setIsAdding,
  setId,
  deleteContact,
}) {
  return (
    <>
      <ContactLi>
        <ContactUser />
        <ContactWrapper>
          <ContactInfoBlock>
            <ContactInfoName>{name}</ContactInfoName>
            {":"}
            <ContactInfoTel>{number}</ContactInfoTel>
          </ContactInfoBlock>
        </ContactWrapper>
        <div>
          <ContactEditBtn
            type="button"
            onClick={() => {
              openModal();
              setIsAdding(false);
              setId(id);
            }}
          >
            <EditIcon />
          </ContactEditBtn>

          <ContactDeleteBtn type="button" onClick={() => deleteContact(id)}>
            <DeleteIcon size={20} />
          </ContactDeleteBtn>
        </div>
      </ContactLi>
    </>
  );
}
