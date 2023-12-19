import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineSearchOff } from "react-icons/md";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactsList from "components/ContactsList";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";
import Loader from "components/Loader";
import Header from "components/Header";
import Modal from "components/Modal";
import FilterSearch from "components/FilterSearch";
import { Container, Wrapper, NoContactsMsg } from "./App.styled";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {isModalOpen && <Modal closeModal={closeModal} isOpen={isModalOpen} />}
      <Container>
        <Wrapper>
          <Header openModal={openModal} />
          <FilterSearch />
          {isLoading ? (
            <Loader />
          ) : contacts && contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <NoContactsMsg>
              No contacts added yet <MdOutlineSearchOff size={30} />
            </NoContactsMsg>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
