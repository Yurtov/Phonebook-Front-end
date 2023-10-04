import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from 'react-icons/ai';
import {
  List,
  ContactItem,
  Div,
  ActionBtn,
  Stub,
  BtnContainer,
  PhoneNumber,
} from './ContactList.styled';
import { BtnClose } from '../Loyaut';
import { customStyles } from '../../pages/Contacts/Contacts';
import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [contact, setContact] = useState(null);

  const openModalEdit = e => {
    setContact({
      id: e.currentTarget.id,
      name: e.currentTarget.name,
      number: e.currentTarget.value,
    });
    setIsModalEditOpen(true);
  };
  const closeModalEdit = () => setIsModalEditOpen(false);
  const toastDelete = () => toast.success('Contact has been deleted from your phone book');

  return (
    <>
      <List>
        {contacts.length !== 0 ? (
          contacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(contact => (
              <ContactItem key={contact.id}>
                <Div>
                  <p>{contact.name}</p>
                  <PhoneNumber href={`tel:${contact.number}`}>
                    {contact.number}
                  </PhoneNumber>
                </Div>

                <BtnContainer>
                  <ActionBtn
                    type="button"
                    onClick={openModalEdit}
                    id={contact.id}
                    name={contact.name}
                    value={contact.number}
                  >
                    <AiOutlineEdit size={27} />
                  </ActionBtn>
                  <ActionBtn
                    type="button"
                    onClick={() => {
                      dispatch(deleteContact(contact.id)) && toastDelete();
                    }}
                  >
                    <AiOutlineDelete size={27} />
                  </ActionBtn>
                </BtnContainer>
              </ContactItem>
            ))
        ) : (
          <Stub>Not found</Stub>
        )}
      </List>
      <Modal
        isOpen={isModalEditOpen}
        onRequestClose={closeModalEdit}
        style={customStyles}
      >
        <BtnClose onClick={closeModalEdit}>
          <AiOutlineClose size={25} />
        </BtnClose>
        <ContactEditForm
          onClose={closeModalEdit}
          style={customStyles}
          contact={contact}
        />
      </Modal>
    </>
  );
};
