import React, { Component } from 'react';
import { Button, Label, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import PropTypes from 'prop-types';

const NATIVE_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = NATIVE_STATE;

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number, id: nanoid() };
    this.setState(NATIVE_STATE);
    this.props.handleAppend(newContact);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          <AiOutlineUser size={28} />
          <Input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <FiSmartphone size={28} />
          <Input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleAppend: PropTypes.func.isRequired,
};
