import styled from 'styled-components';

export const Button = styled.button`
  width: 320px;
  background: #fff;
  padding: 20px;
  border: 0;
  outline: none;
  border-radius: 8px;
  box-shadow: 5px 6px #000;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;

  & + button {
    margin-top: 32px;
  }

  &:hover {
    box-shadow: 5px 8px #000;
    background: #f7f7f7;
  }
`;
