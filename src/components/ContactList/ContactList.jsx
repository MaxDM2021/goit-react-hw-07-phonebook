import React from 'react';
import "./ContactListStyles.scss";
import { deleteContact } from '../redux/contacts/contactsOperations';
import { getContacts} from "../redux/contacts/contactsReduser"
import { useDispatch, useSelector } from 'react-redux';




const ContactList = () => {

const dispatch = useDispatch();
const contacts = useSelector(getContacts);


return (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ContactList__item">
        <p className="TodoList__text">
          {name}: {number}
        </p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={(e) => dispatch(deleteContact(e.target.name))}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>)

};

export default ContactList;
