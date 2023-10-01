import styled from 'styled-components';

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40;
  color: #010101;
`;


export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 33px;
`;

export const BtnClose = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f70202;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  outline: none;
  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  color: #4287f5;
  -webkit-text-stroke: 1.3px #000;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  margin: 0;
`;

export const Massage = styled.p`
  font-size: 20px;
  color: #d4082a;
`;
