import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import css from './App.module.css';
import { useSelector } from 'react-redux';
// import { store } from 'redux/store';
// import { filterReducer } from 'redux/sliceFilter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);
  // console.log(filtered);
  const filterContact = e => {
    //   console.log(contacts);
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    // console.log(filteredContacts);
    return filteredContacts;
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};
