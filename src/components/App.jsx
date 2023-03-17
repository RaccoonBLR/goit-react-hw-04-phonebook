import { useState, useEffect } from 'react';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './ContactItem/ContactItem';

export const App = () => {
  const [contacts, setContacts] = useState(() => getLocalContacts() ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = getLocalContacts();
    savedContacts && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    setLocalContacts(contacts);
  }, [contacts]);

  function getLocalContacts() {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  function setLocalContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  const handleAppend = newContact => {
    const { name: newName } = newContact;

    contacts.some(({ name }) => name === newName)
      ? alert(`${newName} is already in contacts.`)
      : setContacts(state => [...state, newContact]);
  };

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const handleDelete = evt => {
    const removableId = evt.target.id;

    setContacts(state => state.filter(({ id }) => id !== removableId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleAppend={handleAppend} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />

      <ContactList>
        <ContactItem
          contacts={contacts}
          filter={filter}
          handleDelete={handleDelete}
        />
      </ContactList>
    </Container>
  );
};
