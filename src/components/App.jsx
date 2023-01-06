import { useEffect } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/contactsOperations';
import { addContacts } from './redux/contacts/contactsOperations';
import { getContacts, selectIsLoading, selectError } from './redux/contacts/contactsReduser';
import  Loader  from './Loader/Loader';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import './App.scss';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addCont = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      Notiflix.Notify.warning(`❌ ${newContact.name} is already is contacts`, {
        timeout: 3000,
      });

      return false;
    }
    dispatch(addContacts(newContact));

    return true;
  };

  return (
    <div className="Phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addCont} />
      <h2 className="TitleContacts">Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}

// ==== Старая версия на классах ====
// class App extends Component {
//   state = {
//       contacts: [
//         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//       ],
//       filter: "",
//    };

//    addContact = (name, number) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     console.log(newContact);

//     if (this.state.contacts.some(contact => contact.name === newContact.name)) {

//       Notiflix.Notify.warning(`❌ ${newContact.name} is already is contacts`, {
//         timeout: 3000,
//         });

//       return false;
//       }
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }))
//     return true;
//     ;
//   };

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;

//     const normalizedFilter = filter.toLocaleLowerCase();

//     return contacts.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter)
//     );
//   };

// componentDidMount() {
//   console.log('App componentDidMount');
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log('App componentDidUpdate')
//   console.log(prevState);
//   console.log(this.state);

// }

//   render() {

//     console.log('App render');

//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div className="Phonebook">
//       <h1 >Phonebook</h1>
//       <ContactForm onSubmit={this.addContact}  />

//       <h2 className='TitleContacts'>Contacts</h2>
//       <Filter value={filter} onChange={this.changeFilter} />
//       <ContactList  contacts={visibleContacts}
//           onDeleteContact={this.deleteContact} />
//     </div>
//     );
//   }
// }

// export default App;
