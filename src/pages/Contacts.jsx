import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineSearchOff } from "react-icons/md";
import {
  fetchContacts,
  addContact,
  editContact,
} from "../redux/contacts/operations";
import ContactsList from "components/ContactsList";
import { selectContacts, selectIsLoading } from "../redux/contacts/selectors";
import Loader from "components/Loader";
import Bar from "components/Bar";
import Modal from "components/Modal";
import { MainContainer, NoContactsMsg } from "components/App/App.styled";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const [id, setId] = useState(null);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          isOpen={isModalOpen}
          action={isAdding ? addContact : editContact}
          id={id}
        />
      )}

      <MainContainer>
        <Bar openModal={openModal} setIsAdding={setIsAdding} />

        {isLoading ? (
          <Loader />
        ) : contacts && contacts.length > 0 ? (
          <ContactsList
            openModal={openModal}
            setIsAdding={setIsAdding}
            setId={setId}
          />
        ) : (
          <NoContactsMsg>
            No contacts added yet <MdOutlineSearchOff size={30} />
          </NoContactsMsg>
        )}
      </MainContainer>
    </>
  );
};
export default Contacts;
