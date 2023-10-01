import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #4287f5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  position: relative;
`;

export const BtnSingOut = styled.button`
  height: 30px;
  position: absolute;
  right: 35px;
  border: none;
  background-color: #4287f5;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  &:hover,
  :focus {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const BtnOpen = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50px;
  bottom: 50px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #4287f5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;
