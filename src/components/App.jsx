import React, { Component } from 'react';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './ContactItem/ContactItem';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, { contacts: prevContacts }) {
    const { contacts } = this.state;

    if (contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleAppend = newContact => {
    const { name: newName } = newContact;
    const { contacts } = this.state;

    return contacts.some(({ name }) => name === newName)
      ? alert(`${newName} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleDelete = evt => {
    const { id: deleteId } = evt.target;

    this.setState(({ contacts }) => {
      const updateContacts = contacts.filter(({ id }) => !(id === deleteId));

      return {
        contacts: [...updateContacts],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleAppend={this.handleAppend} />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />

        <ContactList>
          <ContactItem
            contacts={contacts}
            filter={filter}
            handleDelete={this.handleDelete}
          />
        </ContactList>
      </Container>
    );
  }
}
