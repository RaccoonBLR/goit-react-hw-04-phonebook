import { Label, Wrapper, Input } from './Filter.styled';
import { HiOutlineSearch } from 'react-icons/hi';
import PropTypes from 'prop-types';

export const Filter = ({ handleChange, filter }) => (
  <Label>
    <Wrapper>
      <HiOutlineSearch size={28} />
      <Input
        onChange={handleChange}
        value={filter}
        type="text"
        name="filter"
        placeholder="Find by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Wrapper>
  </Label>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
