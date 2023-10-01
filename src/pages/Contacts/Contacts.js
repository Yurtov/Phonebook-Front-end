import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineUserAdd, AiOutlineClose } from 'react-icons/ai';
import { Hourglass } from 'react-loader-spinner';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { logOut } from 'redux/auth/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import {
  Layout,
  Contacts as ContactsListSlyled,
  BtnClose,
  SubTitle,
  Massage,
} from '../../components/Loyaut';
import { BtnSingOut, Header, BtnOpen } from './Contscts.styled';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
};

Modal.setAppElement('#root');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsList = useSelector(selectContacts);
  const [isModalAddOpen, setIsModalAppOpen] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    setLoaderVisibility(true);
    setTimeout(() => setLoaderVisibility(false), 1000);
  }, []);

  const ToastAddSuccess = () => toast.success('Contact add to your phonebook');
  const ToastAlreadyHaveContact = (name, phone) =>
    toast.error(`${name} or ${phone} is already in contact`);
  const ToastDelete = () => toast.success('Contact delete from your phonebook');
  const ToastEditSuccess = () => toast.success('Contact edit success');

  const openModalAdd = () => setIsModalAppOpen(true);
  const closeModalAdd = () => setIsModalAppOpen(false);

  return (
    <Layout>
      <Header>
        <Filter />
        <BtnSingOut type="button" onClick={() => dispatch(logOut())}>
          Sing Out
        </BtnSingOut>
      </Header>

      <BtnOpen onClick={openModalAdd} data-btn="btn-add">
        <AiOutlineUserAdd size={45} />
      </BtnOpen>

      <ContactsListSlyled>
        <SubTitle>Contacts</SubTitle>
        {loaderVisibility && isLoading && !error && (
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        )}
        {contactsList.length > 0 ? (
          <div>
            <ContactList
              toastDelete={ToastDelete}
              toastEdit={ToastEditSuccess}
            />
          </div>
        ) : (
          <Massage>Contact list is empty</Massage>
        )}
      </ContactsListSlyled>

      <Modal
        isOpen={isModalAddOpen}
        onRequestClose={closeModalAdd}
        style={customStyles}
      >
        <BtnClose onClick={closeModalAdd}>
          <AiOutlineClose size={25} />
        </BtnClose>
        <ContactForm
          onClose={closeModalAdd}
          style={customStyles}
          toastAdd={ToastAddSuccess}
          toastErrorAdd={ToastAlreadyHaveContact}
        />
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default Contacts;
