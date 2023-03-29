import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarH,
} from './Searchbar.Styled';

const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const searchName = e => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const submitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Type something in search input');
      return;
    }

    onSubmit(name);
    setName('');
  };

  return (
    <SearchbarH>
      <SearchForm onSubmit={submitForm}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          onChange={searchName}
          type="text"
          name="input"
          autocomplete="off"
          value={name}
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarH>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
