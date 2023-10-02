import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { addContact } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import {
  StyledForm,
  Label,
  StyledField,
  StyledErrorMessage,
  Button,
} from './ContactForm.styled';

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

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const toastAddSuccess = () => toast.success('Contact add to your phonebook');
  const toastAlreadyHaveContact = (name, phone) =>
    toast.error(`${name} or ${phone} is already in contact`);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        contacts.some(
          contact =>
            contact.name.toLowerCase().trim() ===
              values.name.toLowerCase().trim() ||
            contact.number.trim() === values.number.trim()
        )
          ? toastAlreadyHaveContact(values.name, values.number)
          : dispatch(
              addContact({
                ...values,
              })
            ) &&
            !isLoading &&
            !error &&
            toastAddSuccess() &&
            setTimeout(() => onClose() && actions.resetForm(), 500);
      }}
    >
      <StyledForm>
        <Label>
          Name <AiOutlineUser />
          <StyledField name="name" />
          <br />
          <StyledErrorMessage name="name" component="div" />
        </Label>

        <Label>
          Number <AiOutlinePhone />
          <StyledField name="number" />
          <br />
          <StyledErrorMessage name="number" component="div" />
        </Label>

        <Button type="submit">
          Add contact
          {isLoading && !error && (
            <RotatingLines
              strokeColor="grey"
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
