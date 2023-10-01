import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const Container = styled.div`
  @media (min-width: 768px) {
    margin-left: 100px;
  }
  @media (min-width: 1100px) {
    margin-left: 250px;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 33px;
  font-weight: 900;

  @media (min-width: 768px) {
    margin-top: 250px;
    font-size: 40px;
  }
`;

export const TitleDecor = styled.span`
  color: #4287f5;
  -webkit-text-stroke: 1.3px #000;
`;

export const BtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BtnLogIn = styled(Link)`
  text-decoration: none;
  background-color: white;
  width: 270px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #4287f5;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #1560f5;
    color: white;
  }
`;

export const BtnSingUp = styled(Link)`
  text-decoration: none;
  background-color: #4287f5;
  color: white;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid white;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #1560f5;
  }
`;

export const BtnLogined = styled(Link)`
  text-decoration: none;
  background-color: white;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #4287f5;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #1560f5;
    color: white;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 20px;
`;
