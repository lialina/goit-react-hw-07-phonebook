import { useState, useEffect, useMemo } from 'react';
import shortid from 'shortid';
import './App.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { postContactOperation, getContactsOperation } from './redux/actions';

export default function App() {
  const dispatch = useDispatch();
  const { items, error, loader } = useSelector(state => state.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const handleSubmitWithAddContact = ({ contact }) => {
    const presentContact = items.find((presentContact) => presentContact.name === contact.name);
    if (presentContact) {
      alert(`${contact.name} is already in contacts. We are working on the ability to edit contacts, but for now you can delete the existing one and add it with a new number.`);
      return;
    }

    dispatch(postContactOperation({ ...contact, id: shortid.generate() }));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    let visibleContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  }, [items, filter]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmitWithAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      {loader && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!loader && !error && <ContactList contactsData={getVisibleContacts} />}
    </Container>
  );
}