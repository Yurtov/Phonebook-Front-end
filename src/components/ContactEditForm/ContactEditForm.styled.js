import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const StyledField = styled(Field)`
  margin-left: 15px;
  height: 25px;
  font-size: 20px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 15px;
  margin-top: 5px;
  color: #f71d05;
`;

export const Button = styled.button`
  margin: 20px auto 0;
  border: none;
  border-radius: 4px;
  background-color: #4287f5;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #1560f5;
  }
`;
