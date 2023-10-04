import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { editContact } from 'redux/operations';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import {
  StyledForm,
  Label,
  StyledField,
  StyledErrorMessage,
  Button,
} from './ContactEditForm.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import toast from 'react-hot-toast';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactEditForm = ({ onClose, contact, toastEdit }) => {
  const dispatch = useDispatch();
  const [contactToEdit, setContactToEdit] = useState({
    id: contact.id,
    name: contact.name,
    number: contact.number,
  });
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleChange = e => {
    const targetName = e.target.name;
    const values = e.target.value;
    if (targetName === 'name') {
      setContactToEdit(prevState => ({ ...prevState, name: values }));
    }
    if (targetName === 'number') {
      setContactToEdit(prevState => ({ ...prevState, number: values }));
    }
  };

  const ToastEditSuccess = () => toast.success('Contact edit success');
  const toastAlreadyHaveContact = (name) =>
    toast.error(`${name} is already in contact`);

  return (
    <Formik
      initialValues={{
        name: `${contact.name}`,
        number: `${contact.number}`,
      }}
      validationSchema={schema}
      onSubmit={values => {
        contacts.some(
          contact =>
            contact.name.toLowerCase().trim() ===
            values.name.toLowerCase().trim()
        )
          ? toastAlreadyHaveContact(values.name)
          : dispatch(editContact(contactToEdit)) &&
            ToastEditSuccess() &&
            setTimeout(() => onClose(), 500);
      }}
    >
      <StyledForm>
        <Label onChange={handleChange}>
          Name <AiOutlineUser />
          <StyledField name="name" />
          <br />
          <StyledErrorMessage name="name" component="div" />
        </Label>

        <Label onChange={handleChange}>
          Number <AiOutlinePhone />
          <StyledField name="number" />
          <br />
          <StyledErrorMessage name="number" component="div" />
        </Label>

        <Button type="submit">
          Edit contact
          {isLoading && !error && (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          )}
        </Button>
      </StyledForm>
    </Formik>
  );
};
