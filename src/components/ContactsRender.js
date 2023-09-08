import PropTypes from 'prop-types';
import {ContactsList,
       ContactItem,
       ContactName,
       ContactNumber,
       DeleteButton} from "./ContactsRenderStyled.js"

export const ContactsRender = ({contacts, onDeleteContact }) => {
    return (
      <ContactsList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
          <ContactName> name: {contact.name},</ContactName><ContactNumber>tel: {contact.number}</ContactNumber>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>X</DeleteButton>
          </ContactItem>
        ))}
      </ContactsList>
    );
  };
  ContactsRender.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };