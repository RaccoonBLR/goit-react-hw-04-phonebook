import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => <List>{children}</List>;

ContactList.propTypes = {
  children: PropTypes.element,
};
