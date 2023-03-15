import { useState } from 'react';
import { Button, Label, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import PropTypes from 'prop-types';

export const ContactForm = ({ handleAppend }) => {
  const INITIAL_STATE = '';

  const [name, setName] = useState(INITIAL_STATE);
  const [number, setNumber] = useState(INITIAL_STATE);

  const handleReset = () => {
    setName(INITIAL_STATE);
    setNumber(INITIAL_STATE);
  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const newContact = { name, number, id };
    handleAppend(newContact);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <AiOutlineUser size={28} />
        <Input
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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
};

ContactForm.propTypes = {
  handleAppend: PropTypes.func.isRequired,
};
