import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
  font-size: 25px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  color: #4287f5;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ActionBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    transform: scale(1.2);
    color: #4287f5;
  }
`;

export const Stub = styled.div`
  color: red;
`;
