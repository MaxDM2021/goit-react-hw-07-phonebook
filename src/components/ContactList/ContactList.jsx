import React from 'react';
import './ContactListStyles.scss';
import { deleteContact } from '../redux/contacts/contactsOperations';
import { getContacts } from '../redux/contacts/contactsReduser';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filterContact = useSelector(getFilterValue);

  const constgetVisibleContacts = () => {
    if (filterContact === '') {
      return false;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact)
    );
  };

  const finishContacts = constgetVisibleContacts() ? constgetVisibleContacts() : contacts;

  
  return (
    <ul className="ContactList">
      {finishContacts.map(({ id, name, phone }) => (
        <li key={id} className="ContactList__item">
          <p className="TodoList__text">
            {name}: {phone}
          </p>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
