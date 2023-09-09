import { styled } from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  margin: 5px auto;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-style: italic;
  color: #888;
`;

export const DeleteButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }
`;
